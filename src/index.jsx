import './index.less'
import React from 'react';
import {render} from 'react-dom'
import App from "./components/app/app";
import {Provider} from "react-redux";
import {store} from './reducer/reducer'


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)