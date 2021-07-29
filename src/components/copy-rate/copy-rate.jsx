import React from 'react';

import {Tooltip} from "@material-ui/core";

import './copy-rate.css'

const CopyRate = ({value}) => {
    return (
        <Tooltip title = "кликните для копирования" placement="top">
            <button className="btn btn-outline-secondary btn-sm copy "
                    onClick={() => {
                        navigator.clipboard.writeText(value);
                    }}>
                <i className="fa fa-copy"></i>
            </button>
        </Tooltip>
    );
};

export default CopyRate;