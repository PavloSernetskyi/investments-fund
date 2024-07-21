import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Home() {

// create obj to store investments info. axios part.
    const [investments, setUsers] = useState([])
// now every time page will be loaded it will load investments info and we need to use useEffect for that.
    useEffect(() =>{
      console.log("Code with pavlo")
      loadInvestments();
    },[]);

    const loadInvestments = async() => {
      const result = await axios.get("http://localhost:8080/investments")
      console.log(result.data);
      // to dipslay in table..
      setUsers(result.data);
    }

    const deleteInvestment= async (id)=>{
      await axios.delete(`http://localhost:8080/investment/${id}`)
      loadInvestments();
    }


  return (
    <div className='container'>
    <div className='p-4'>
      <table className="table border shadow">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Investment name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount Invested</th>

        </tr>
        </thead>
        {/* use user id  to have same id as in database. or use index and index +1 */}
        { <tbody>
        {investments.map((investment, index) => (<tr key={investment.id}>
              <th scope="row">{investment.id }</th>
              <td>{investment.investmentName}</td>
              <td>{investment.investmentDescription}</td>
              <td>{investment.amountInvested}</td>
              <td>
                <button className="btn btn-primary mx-2">View</button>
                <button className="btn btn-outline-primary mx-2">Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => deleteInvestment(investment.id)}>Delete</button>
              </td>
            </tr>))}
        </tbody> }



      </table>
    </div>
    </div>)
}
