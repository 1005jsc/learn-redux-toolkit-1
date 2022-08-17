import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './modules/counter';
import { Provider } from 'react-redux';
import { productReducer } from './modules/counter';
import { configureStore } from '@reduxjs/toolkit';

// 7. configureStore 를 쓰면 reducer들을 묶어주는 combineReducers를 쓸 필요가 없어진다
// configureStore 에 다 갖다 때려박으면 된다
const store = configureStore({
  reducer: {
    provider: productReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
