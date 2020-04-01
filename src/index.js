import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';
import CounterStore from './stores/counter';

const counter = new CounterStore();

ReactDOM.render(
  <Provider counter={counter}>
    {/*  Provider에 props로 넣어준다.*/}
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker();