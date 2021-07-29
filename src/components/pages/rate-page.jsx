import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRates} from "../../actions/getRates";

import LoadingIndicator from "../loading-indicator/loading-indicator";
import RemovedRow from "../removed-row/removed-row";
import SortRate from "../sort-rate/sort-rate";

import './rate-page.css'


const RatePage = ({title, rates}) => {
    const dispatch = useDispatch();
    const usdId = useSelector(state => state.usdId);
    const eurId = useSelector(state => state.eurId);
    const rurId = useSelector(state => state.rurId);
    const dateStart = useSelector(state => state.dateStart);
    const dateEnd = useSelector(state => state.dateEnd);


    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const visibleRates = useSelector(state => state.visibleRates);
    const dates = useSelector(state => state.dates);


    useEffect(() => {
        dispatch(getRates(usdId, dateStart, dateEnd));
        dispatch(getRates(eurId, dateStart, dateEnd));
        dispatch(getRates(rurId, dateStart, dateEnd));
    }, [dateEnd, dateStart])


    if (loading) {
        return <LoadingIndicator/>;
    }
    if (error) {
        return <div className="error">Something went wrong...</div>;
    }

    return (
        <table className="container table">
            {rates.length > 0 ? <thead key={Math.floor(Math.random()*10000)}>
                <tr key={Math.floor(Math.random()*10000)}>
                    <th scope="col">Date</th>
                    <th scope="col">
                        {title}
                        <SortRate rates = {rates}/>
                    </th>
                </tr>
                </thead> :
                <thead><tr key={Math.floor(Math.random()*10000)}  ><td className="currency-not">this currency is not</td></tr></thead>
            }
            <tbody key={Math.floor(Math.random()*10000)}>

            {
                dates.map((date, index) => {
                    return <tr key={Math.floor(Math.random()*10000)} scope="row">
                        {visibleRates.length > 0 && <td>{date.slice(0, 10)}</td>}
                        <td
                        >{String(rates[index])}
                            <RemovedRow rates ={rates} index ={index}/>
                        </td>
                    </tr>
                })
            }

            </tbody>
        </table>

    )


};

export default RatePage;