import React from 'react';
import {setDateStart, setDateEnd} from "../../reducer/reducer";

import './calendar.less'
import {useDispatch, useSelector} from "react-redux";

const Calendar = () => {
    const dateStart = useSelector(state => state.dateStart);
    const dateEnd = useSelector(state => state.dateEnd);
    const dispatch = useDispatch();
    return (
        <form>
            <div className="form-group calendar">
                <div className='calendar__indent'>
                    <label htmlFor="inputDate">Дата начала просмотра курса (mm/dd/yyyy)</label>
                    <input value={dateStart} onChange={(e)=>dispatch(setDateStart(e.target.value))} type="date" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="inputDate">Дата окончания просмотра курса (mm/dd/yyyy)</label>
                    <input value={dateEnd} onChange={(e)=>dispatch(setDateEnd(e.target.value))} type="date" className="form-control"/>
                </div>
            </div>
        </form>
    );
};

export default Calendar;