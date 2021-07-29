import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {DATE_START, DATE_END, USD_ID, EUR_ID, RUR_ID, IS_LOADING, SET_DATE_START, SET_DATE_END,
        IS_FETCHING_ERROR, SET_RATES_USD, SET_RATES_EUR, SET_RATES_RUR, SET_TERM, SET_DATES, UPDATE_RATES,
        ROW_REMOVED_FROM_TABLE, SET_SELECT_DATE, SET_RATE_RUR, SET_RATE_EUR, SET_RATE_USD, DATE_ADDED_TO_TABLE } from '../constants/constants.js';

const defaultState ={
    dateStart: DATE_START,
    dateEnd: DATE_END,
    usdId: USD_ID,
    eurId: EUR_ID,
    rurId: RUR_ID,
    loading: true,
    error: false,
    fullRates: ['USD', 'EUR', 'RUR'],
    visibleRates: ['USD', 'EUR', 'RUR'],
    dates: [],
    ratesUSD: [],
    ratesEUR: [],
    ratesRUR: [],
    term: '',
    dateSelect: ''
};

const rootReducer = (state = defaultState, action)=>{
    switch (action.type) {

        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case SET_DATE_START:
            return {
                ...state,
                dateStart: action.payload
            }
        case SET_DATE_END:
            return {
                ...state,
                dateEnd: action.payload
            }
        case SET_TERM:
            return {
                ...state,
                term: action.payload
            }
        case SET_DATES:
            return {
                ...state,
                dates: action.payload
            }
        case UPDATE_RATES:
            return {
                ...state,
                visibleRates: action.payload
            }
        case ROW_REMOVED_FROM_TABLE:
            return{
                ...state,
                dates:  [
                    ...state.dates.slice(0, action.payload),
                    ...state.dates.slice(action.payload+1)
                ],
                ratesUSD:  [
                    ...state.ratesUSD.slice(0, action.payload),
                    ...state.ratesUSD.slice(action.payload+1)
                ],
                ratesEUR:  [
                    ...state.ratesEUR.slice(0, action.payload),
                    ...state.ratesEUR.slice(action.payload+1)
                ],
                ratesRUR:  [
                    ...state.ratesRUR.slice(0, action.payload),
                    ...state.ratesRUR.slice(action.payload+1)
                ]
            }
        case DATE_ADDED_TO_TABLE:
            return{
                ...state,
                dates:  [
                    ...state.dates,
                    action.payload
                ]
            }
        case SET_SELECT_DATE:
            return{
                ...state,
                dateSelect: action.payload
            }
        case SET_RATES_USD:
            return{
                ...state,
                ratesUSD: action.payload,
            }
        case SET_RATES_EUR:
            return{
                ...state,
                ratesEUR: action.payload
            }
        case SET_RATES_RUR:
            return{
                ...state,
                ratesRUR: action.payload
            }
        case SET_RATE_USD:
            return{
                ...state,
                ratesUSD: [
                    ...state.ratesUSD,
                    action.payload
                ]
            }
        case SET_RATE_EUR:
            return{
                ...state,
                ratesEUR: [
                    ...state.ratesEUR,
                    action.payload
                ]
            }
        case SET_RATE_RUR:
            return{
                ...state,
                ratesRUR: [
                    ...state.ratesRUR,
                    action.payload
                ]
            }

        case IS_FETCHING_ERROR:
            return{
                ...state,
                isFetchingError: action.payload
            }
        default:
            return state;
    }
};

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export const setLoading = bool=>({ type: IS_LOADING, payload: bool});

export const setError = error=>({type: IS_FETCHING_ERROR, payload: error});

export const setRatesUSD = rates => ({type: SET_RATES_USD, payload: rates});
export const setRatesEUR = rates => ({type: SET_RATES_EUR, payload: rates});
export const setRatesRUR = rates => ({type: SET_RATES_RUR, payload: rates});

export const setRateUSD = rate => ({type: SET_RATE_USD, payload: rate});
export const setRateEUR = rate => ({type: SET_RATE_EUR, payload: rate});
export const setRateRUR = rate => ({type: SET_RATE_RUR, payload: rate})

export const setDateStart = date =>({type: SET_DATE_START, payload: date })
export const setDateEnd = date =>({type: SET_DATE_END, payload: date })

export const setTerm = term =>({type: SET_TERM, payload: term })
export const setDates = dates =>({type: SET_DATES, payload: dates })
export const setSelectDate = date =>({type: SET_SELECT_DATE, payload: date})

export const updateRates = rate =>({type: UPDATE_RATES, payload: rate })
export const removedRow =  index =>({type: ROW_REMOVED_FROM_TABLE, payload: index})
export const addedDate = date =>({type: DATE_ADDED_TO_TABLE, payload: date})


