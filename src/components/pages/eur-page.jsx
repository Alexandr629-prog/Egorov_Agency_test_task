import React from 'react';
import RatePage from "./rate-page";
import {useSelector} from "react-redux";
import AddedRow from "../added-row/added-row";

const EurPage = ({history}) => {
    const eurId = useSelector(state => state.eurId)
    return (
        <div className="container">
            <AddedRow history = {history} rateId={eurId}/>
            <RatePage title="EUR" rates={useSelector(state => state.ratesEUR)}/>
        </div>
    );
};

export default EurPage;