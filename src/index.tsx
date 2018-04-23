import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './app';
import configureStore from 'app/store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

// prepare store
const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app") as HTMLElement
);