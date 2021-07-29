import React from 'react';
import {setSelectDate, addedRow} from "../../reducer/reducer";
import {useDispatch, useSelector} from "react-redux";
import {getRateById} from "../../actions/getRateById";

import './added-row.css'
import {Tooltip} from "@material-ui/core";

const AddedRow = ({rateId, history}) => {
    const dispatch = useDispatch();
    const dateSelect = useSelector(state => useSelector(state=>state.dateSelect));
    return (

            <div  className="form-group date">
                <Tooltip title = "кликните для перехода на начальную страницу" placement="top">
                    <button className="btn btn-outline-secondary back"
                            onClick={() => {
                                history.goBack();
                            }}>
                       Назад
                    </button>
                </Tooltip>
                <div className='date__indent'>
                    <label htmlFor="inputDate">Выберите дату для добавления в таблицу (mm/dd/yyyy)</label>
                    <input value={dateSelect} onChange={(e)=>dispatch(setSelectDate(e.target.value))} type="date" className="form-control"/>
                </div>
                <button  onClick={(e)=> {
                e.preventDefault();
                dispatch(getRateById(rateId, dateSelect))

            }}
                className="add btn btn-outline-secondary">Добавить</button>
            </div>

    );
};

export default AddedRow;