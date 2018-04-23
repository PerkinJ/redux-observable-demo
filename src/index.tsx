import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from './app';
import configureStore from 'app/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app") as HTMLElement
);