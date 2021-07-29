import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLoading, setTerm} from "../../reducer/reducer";
import {updateRates} from "../../reducer/reducer";

import './search-panel.less'
import {getRates} from "../../actions/getRates";
import LoadingIndicator from "../loading-indicator/loading-indicator";

const SearchPanel = () => {

    const term = useSelector(state => state.term);
    const fullRates = useSelector(state => state.fullRates);
    const dispatch = useDispatch()

    const usdId = useSelector(state => state.usdId);
    const eurId = useSelector(state => state.eurId);
    const rurId = useSelector(state => state.rurId);
    const dateStart = useSelector(state => state.dateStart);
    const dateEnd = useSelector(state => state.dateEnd);

    const onSearch = (e)=>{
        const filterRates =  fullRates.filter((rate) => {
            return rate.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
        });
        dispatch(updateRates(filterRates));
    }

    return (
        <div className="d-flex">
            <input value={term} onChange={(e)=>{
                dispatch(setTerm(e.target.value));
                onSearch(e);
            }}
                   className="form-control search-input" type="text" placeholder="enter currency name"/>
            <button onClick={()=>{
                dispatch(setLoading(true))
                dispatch(getRates(usdId, dateStart, dateEnd));
                dispatch(getRates(eurId, dateStart, dateEnd));
                dispatch(getRates(rurId, dateStart, dateEnd));
            }}
                className="btn btn-outline-secondary refresh">Refresh all</button>
        </div>
    );
};

export default SearchPanel;