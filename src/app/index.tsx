import * as React from 'react';
import {  Hello } from 'app/components/Hello';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Hello compiler="111" framework="222"/>
));
