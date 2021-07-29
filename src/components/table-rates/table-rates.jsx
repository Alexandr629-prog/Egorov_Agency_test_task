import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRates} from "../../actions/getRates";
import {NavLink} from "react-router-dom";

import LoadingIndicator from "../loading-indicator/loading-indicator";
import CopyRate from "../copy-rate/copy-rate";

import './table-rates.less'


const TableRates = () => {
    const dispatch = useDispatch();
    const usdId = useSelector(state => state.usdId);
    const eurId = useSelector(state => state.eurId);
    const rurId = useSelector(state => state.rurId);
    const dateStart = useSelector(state => state.dateStart);
    const dateEnd = useSelector(state => state.dateEnd);

    const ratesUSD = useSelector(state => state.ratesUSD);
    const ratesEUR = useSelector(state => state.ratesEUR);
    const ratesRUR = useSelector(state => state.ratesRUR);

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

    const maxUSD = Math.max(...ratesUSD);
    const minUSD = Math.min(...ratesUSD);

    const maxEUR = Math.max(...ratesEUR);
    const minEUR = Math.min(...ratesEUR);

    const maxRUR = Math.max(...ratesRUR);
    const minRUR = Math.min(...ratesRUR);


    return (
        <table className="table">
            {visibleRates.length > 0 ? <thead key={Math.floor(Math.random()*10000)}>
                <tr key={Math.floor(Math.random()*10000)}>
                    <th scope="col">Date</th>
                    {
                        visibleRates.map((rate) => {
                            return <th key={Math.floor(Math.random()*10000)} scope="col"><NavLink  style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}} to = {rate.toLowerCase()}><span className='header__rates'>{rate}</span></NavLink></th>
                        })
                    }
                </tr>
                </thead> :
                <thead><tr key={Math.floor(Math.random()*10000)}  ><td className="currency-not">this currency is not</td></tr></thead>
            }
            <tbody key={Math.floor(Math.random()*10000)}>

            {
                dates.map((date, index) => {
                    return <tr key={Math.floor(Math.random()*10000)} scope="row">
                        {visibleRates.length > 0 && <td>{date.slice(0, 10)}</td>}

                        {ratesUSD.length > 0 && visibleRates.includes('USD') &&
                        <td className={ratesUSD[index] == maxUSD && 'max'
                                        || ratesUSD[index] == minUSD && 'min' || null }
                        >{ratesUSD[index]}
                        <CopyRate value ={ratesUSD[index]}/>
                        </td>}

                        {ratesEUR.length > 0 && visibleRates.includes('EUR') &&
                        <td  className={ratesEUR[index] == maxEUR && 'max'
                        || ratesEUR[index] == minEUR && 'min' || null }>{ratesEUR[index]}
                        <CopyRate value ={ratesEUR[index]}/>
                        </td>}

                        {ratesRUR.length > 0 && visibleRates.includes('RUR') &&
                        <td  className={ratesRUR[index] == maxRUR && 'max'
                        || ratesRUR[index] == minRUR && 'min' || null }>{ratesRUR[index]}
                        <CopyRate value ={ratesRUR[index]}/>
                        </td>}
                    </tr>
                })
            }

            </tbody>
        </table>

    )


};

export default TableRates;