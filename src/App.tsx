import React, {useReducer, useState} from 'react';
import {useQuery, gql, useMutation} from "@apollo/client";
import {DatePicker} from 'antd';
import './App.css';

const {RangePicker} = DatePicker;

const EXCHANGE_RATES = gql`
    query GetAllBall($blueBall: Int!){
        getAllBall(blueBall: $blueBall){
            redBall
            period
            blueBall
        }
    }
`;
const ADD_LOTTERY = gql`
    mutation AddOnePerios($redBall:[Int]!,$blueBall:Int!,$date:String!,$perios:String!){
        addOnePerios(post: {redBall: $redBall,blueBall: $blueBall,date: $date,perios: $perios})
    }
`

function App() {
    const [addLottery] = useMutation(ADD_LOTTERY, {
        variables:{redBall:[1,2,3],blueBall:12,date:"332",perios:"122"}
    })
    const {loading, error, data, refetch} = useQuery(EXCHANGE_RATES, {
        variables: {
            blueBall: 10
        }
    })
    if (loading) return <div>loading……</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            <button onClick={()=>addLottery()}>add</button>
            <button onClick={()=>refetch({blueBall:12})}>refetch</button>
            {data.getAllBall.length}
        </div>
    );
}

export default App;
