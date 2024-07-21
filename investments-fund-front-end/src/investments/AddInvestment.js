import React, {useState} from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddInvestment() {
    let navigate=useNavigate();

    //  to store info in db we need to create obj.
    // and store user info inside of state.
    const [investment, setInvestment]=useState({
      investmentName:"",
      investmentDescription:"",
      amountInvested:""
    })

    const{investmentName,investmentDescription,amountInvested}=investment

    const onInputChange=(e)=>{
        setInvestment({...investment,[e.target.name]: e.target.value});
    }

    // post data in db using axios.
    const onSubmit= async (e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8080/investment", investment);
      navigate("/")


    }

    return (
      <div className='container'>
        <div className='row'>
  <form onSubmit={(e)=>onSubmit(e)}>
        <div className='h2'>Add Investment</div>
        <div className="form-group">
          <label htmlFor="investmentName">Investment Name</label>
          <input
           type="text"
           className="form-control m-2"
           placeholder="enter investment name"

           name="investmentName"
           value={investmentName}
           onChange={(e)=>onInputChange(e)}
            />

        </div>
        <div className="form-group">
          <label htmlFor="investmentDescription">Investment Description</label>
          <input type="text"
           className="form-control m-2"
           placeholder="description 5-200 characters"

           name="investmentDescription"
           value={investmentDescription}
           onChange={(e)=>onInputChange(e)}
           />
        </div>
        <div className="form-group">
          <label htmlFor="amountInvested">Amount Invested</label>
          <input type="text"
           className="form-control m-2"
           placeholder="amount invested in $"

           name="amountInvested"
           value={amountInvested}
           onChange={(e)=>onInputChange(e)}
            />
        </div>
        <button type="submit" className="btn btn-primary m-2">Submit</button>
        <Link className="btn btn-danger m-2" to={"/"}>Cancel</Link>
      </form>
      </div>
      </div>
  )
}
