import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './redux/userSlice';
import eventSlice from './redux/eventSlice';
import itemSlice from './redux/itemSlice';
import orderSlice from './redux/orderSlice';

const store = configureStore({
  reducer: {
    userSlice,
    eventSlice,
    itemSlice,
    orderSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
const MyContext = React.createContext();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();