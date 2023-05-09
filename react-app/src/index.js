import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import './index.css';
import App from './App';
import configureStore from './store';
import CartProvider from './context/CartContext';
import PageSizeProvider from './context/PageSizeContext';
import DropDownProvider from './context/DropDownContext';

const store = configureStore();

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DropDownProvider>
        <PageSizeProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PageSizeProvider>
      </DropDownProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
