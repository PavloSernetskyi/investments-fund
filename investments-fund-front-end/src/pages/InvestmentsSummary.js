import axios from 'axios';
import React, { useEffect, useState } from 'react';

const InvestmentsSummary = () => {
    const [totalInvested, setTotalInvested] = useState(0);

    useEffect(() => {
        const fetchInvestments = async () => {
            const result = await axios.get('http://localhost:8080/investments');
            const total = result.data.reduce((sum, investment) => sum + investment.amountInvested, 0);
            setTotalInvested(total);
        };

        fetchInvestments();
    }, []);

    return (
        <div className='container'>
            <h2>Total Investments Summary</h2>
            <p>Total Amount Invested: ${totalInvested}</p>
        </div>
    );
};

export default InvestmentsSummary;