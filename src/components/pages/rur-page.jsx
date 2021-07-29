import React from 'react';
import RatePage from "./rate-page";
import {useSelector} from "react-redux";
import AddedRow from "../added-row/added-row";

const RurPage = ({history}) => {
    const rurId = useSelector(state => state.rurId)
    return (
        <div className="container">
            <AddedRow history={history}  rateId={rurId}/>
            <RatePage title="RUR" rates={useSelector(state => state.ratesRUR)}/>
        </div>
    );
};

export default RurPage;