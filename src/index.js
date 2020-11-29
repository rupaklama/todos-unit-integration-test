import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

// redux dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

// redux thunk to make async network request
import thunk from 'redux-thunk';

// to add multiple different middlewares here in an array
// Also, making it Named export to use our middlewares in
// our Test STORE - 'storeFactory' in testUtils.js
export const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
