import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//1. We imported Provider from React Redux
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
//2. We used Provider to wrap our React application
// 3. We passed our store instance into Provider as a prop, making it available to all of our other components.
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('root')
);
