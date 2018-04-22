import * as React from "react";
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { hot } from 'react-hot-loader';
const store = configureStore();


export const App = hot(module)(() => (
    <Provider store={store}>
        <Hello/>
    </Provider>
));
