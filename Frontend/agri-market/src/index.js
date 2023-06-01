import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ProductProvider } from './context/ProductContext';
import { Provider as AddCartProvider } from './context/AddCartContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AddCartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </AddCartProvider>
  // </React.StrictMode>
);

