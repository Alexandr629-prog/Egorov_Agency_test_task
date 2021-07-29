import React from 'react';
import Calendar from "../calendar/calendar";
import SearchPanel from "../search-panel/search-panel";
import TableRates from "../table-rates/table-rates";

const HomePage = () => {
    return (
        <div className="container">
            <Calendar/>
            <SearchPanel/>
            <TableRates/>
        </div>
    );
};

export default HomePage;