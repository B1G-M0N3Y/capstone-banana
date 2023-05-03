import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import './index.css';
import App from './App';
import configureStore from './store';
import CartProvider from './context/CartContext';
import PageSizeProvider from './context/PageSizeContext';

const store = configureStore();

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageSizeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PageSizeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
