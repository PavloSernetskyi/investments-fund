import axios from "axios";
import React, { useEffect, useState } from 'react';

export default function Home() {

// create obj to store investments info. axios part.
    const [investments, setInvestments] = useState([])
// now every time page will be loaded it will load investments info and we need to use useEffect for that.
    useEffect(() =>{
      console.log("Code with pavlo")
      loadInvestments();
    },[]);

    const loadInvestments = async() => {
      const result = await axios.get("http://localhost:8080/investments")
      console.log(result.data);
      // to dipslay in table..
      setInvestments(result.data);
    }

    const deleteInvestment= async (id)=>{
      await axios.delete(`http://localhost:8080/investment/${id}`)
      loadInvestments();
    }

  // Function to sort investments by amount invested in descending order
  const sortInvestmentsByAmount = () => {
    const sorted = [...investments].sort((a, b) => b.amountInvested - a.amountInvested);
    setInvestments(sorted);
  };


  return (
    <div className='container'>
    <div className='p-4'>
    <h1>Investments Fund</h1>
    <button className="btn btn-primary mb-3" onClick={sortInvestmentsByAmount}>Sort by Amount Invested</button>
      <table className="table border shadow">
        <thead>
        <tr>
          <th scope="col">Unique ID</th>
          <th scope="col">Investment Name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount Invested</th>

        </tr>
        </thead>
        {/* use investments.id to have same id as in database. or use index and index +1 to display investments from 1 to nth... */}
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
