import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {BrowserRouter} from "react-router-dom";

export const context = React.createContext(1);

ReactDOM.render(
    <React.StrictMode>
        <context.Provider value={1}>
        <Provider store={store}>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </Provider>
        </context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
