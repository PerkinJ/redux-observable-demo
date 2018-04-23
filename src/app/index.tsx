import * as React from "react";
import Hello from './containers/Hello';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom'


export const App = hot(module)(() => (
    <BrowserRouter>
        <Route exact path="/" component={Hello} />
    </BrowserRouter>

));
