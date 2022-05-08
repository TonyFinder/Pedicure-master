import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from './components/App/App';
import {HashRouter} from 'react-router-dom';
import {ScrollToTop} from './components/common/ScrollToTop/ScrollToTop';
import {Provider} from 'react-redux';
import {store} from './data/store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <Provider store={store}>
            <HashRouter>
                <ScrollToTop/>
                <App/>
            </HashRouter>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
