import React, {useReducer} from 'react';
import {useQuery, gql} from "@apollo/client";
import './App.css';

const EXCHANGE_RATES = gql`
    query{
        getAllBall{
            redBall
        }
    }
`;

function App() {
    const {loading, error, data} = useQuery(EXCHANGE_RATES)
    console.log(data)
    if (loading) return <div>loading……</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            1
            {/*{data.rates.map((item: any, index: number) => {*/}
            {/*    return <p key={index}>{item.currency}</p>*/}
            {/*})}*/}
        </div>
    );
};

export default App;
