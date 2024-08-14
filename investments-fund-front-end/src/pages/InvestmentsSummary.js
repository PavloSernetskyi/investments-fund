import axios from 'axios';
import React, { useEffect, useState } from 'react';

const InvestmentsSummary = () => {
    const [totalInvested, setTotalInvested] = useState(0);
    const [totalToBeInvested, setTotalToBeInvested] = useState(10000000); // 10 million by default
    const [additionalFunds, setAdditionalFunds] = useState(0);

    useEffect(() => {
        const fetchInvestments = async () => {
            const result = await axios.get('http://localhost:8080/investments');
            const total = result.data.reduce((sum, investment) => sum + investment.amountInvested, 0);
            setTotalInvested(total);
        };

        fetchInvestments();
    }, []);

    const handleAddFunds = () => {
        setTotalToBeInvested(prevTotal => prevTotal + parseFloat(additionalFunds));
        setAdditionalFunds(0); // Reset the input field
    };

    const remainingToInvest = totalToBeInvested - totalInvested;

    return (
        <div className='container'>
            <h2>Total Investments Summary</h2>
            <p>Total Amount Invested: ${totalInvested}</p>
            <p>Remaining to invest: ${remainingToInvest}</p>
            <p>Pool of money to be Invested: ${totalToBeInvested}</p>
            
            <input 
                type="number" 
                value={additionalFunds} 
                onChange={(e) => setAdditionalFunds(e.target.value)} 
                placeholder="Enter amount to add" 
            />
            <button onClick={handleAddFunds}>Add Funds to the pool</button>
        </div>
    );
};

export default InvestmentsSummary;