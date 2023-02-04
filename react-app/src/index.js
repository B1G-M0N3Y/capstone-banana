import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import './index.css';
import App from './App';
import configureStore from './store';
import CartProvider from './context/CartContext';

const store = configureStore();

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
