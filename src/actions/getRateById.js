import axios from "axios";
import {setError, setRateUSD, setRateEUR, setRateRUR, addedDate} from "../reducer/reducer";
import {USD_ID, EUR_ID, RUR_ID} from "../constants/constants";


export const getRateById = (rateId, dateSelect)=>{
    return async dispath =>{
        try{
            console.log(`https://www.nbrb.by/api/exrates/rates/${rateId}?ondate=${dateSelect}`)
            const response = await axios
                .get(`https://www.nbrb.by/api/exrates/rates/${rateId}?ondate=${dateSelect}`);
            dispath(addedDate(response.data.Date))
            switch (rateId) {
                case USD_ID:
                    dispath(setRateUSD(response.data.Cur_OfficialRate));
                    break;
                case EUR_ID:
                    dispath(setRateEUR(response.data.Cur_OfficialRate));
                    break;
                case RUR_ID:
                    dispath(setRateRUR(String(response.data.Cur_OfficialRate/10).slice(0, 5)));
                    break;
                default: break;
            }
        }catch(e){
            dispath(setError(true));
        }

    };
};