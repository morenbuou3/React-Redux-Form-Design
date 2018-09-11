import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/component/App'
import {Provider} from "react-redux";
import reducer from './src/component/Reducer'
import {createStore} from "redux";

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);