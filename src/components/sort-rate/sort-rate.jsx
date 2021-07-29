import React from 'react';
import {Tooltip} from "@material-ui/core";
const SortRate = ({rates}) => {
    return(
        <Tooltip title = "кликните для сортировки" placement="top">
            <button className="btn btn-outline-secondary btn-sm copy "
                    onClick={() => {
                        //sort arr date and sort arr rates
                    }}>
                <i className="fas fa-sort"></i>
            </button>
        </Tooltip>
    )
};

export default SortRate;