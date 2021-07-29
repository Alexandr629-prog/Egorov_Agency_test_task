import axios from "axios";
import { setLoading, setError, setRatesUSD, setRatesEUR, setRatesRUR , setDates} from "../reducer/reducer";
import {USD_ID, EUR_ID, RUR_ID} from "../constants/constants";


export const getRates = (rateId, dateStart, dataEnd)=>{
    return async dispath =>{
       try{
            const response = await axios
                    .get(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/${rateId}?startDate=${dateStart}&endDate=${dataEnd}`);
            const dates = [];
            response.data.map(rate=>dates.push(rate.Date));
            dispath(setDates(dates))
            const rates =[];
            response.data.map(rate=>rates.push(rate.Cur_OfficialRate));
            switch (rateId) {
                case USD_ID:
                    dispath(setRatesUSD(rates));
                    break;
                case EUR_ID:
                    dispath(setRatesEUR(rates));
                    break;
                case RUR_ID:
                    const ratesUsd =[];
                    response.data.map(rate=> ratesUsd.push(String(rate.Cur_OfficialRate/100).slice(0, 7)));
                    dispath(setRatesRUR(ratesUsd));
                    dispath(setLoading(false));
                    break;
                default: break;
            }
       }catch(e){
        dispath(setError(true));
       }

    };
};