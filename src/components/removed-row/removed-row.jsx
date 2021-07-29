import React from 'react';
import {Tooltip} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {removedRow} from "../../reducer/reducer";

const RemovedRow = ({index}) => {
    const dispatch = useDispatch();
    return (
        <Tooltip title = "кликните для удаления" placement="top">
            <button className="btn btn-outline-secondary btn-sm copy "
                    onClick={() =>dispatch(removedRow( index))}>
                <i className="fa fa-trash"></i>
            </button>
        </Tooltip>
    );
};

export default RemovedRow;