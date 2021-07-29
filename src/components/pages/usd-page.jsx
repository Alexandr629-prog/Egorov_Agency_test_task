import React from 'react';
import RatePage from "./rate-page";
import {useSelector} from "react-redux";
import AddedRow from "../added-row/added-row";

const UsdPage = ({history}) => {
    const usdId = useSelector(state => state.usdId)
    return (
        <div className="container">
            <AddedRow history={history} rateId={usdId}/>
            <RatePage title="USD" rates={useSelector(state => state.ratesUSD)}/>
        </div>
    );
};

export default UsdPage;