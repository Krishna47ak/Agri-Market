import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ProductProvider } from './context/ProductContext';
import { Provider as AddCartProvider } from './context/AddCartContext';
import { Provider as AuthProvider } from './context/AuthContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <AddCartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AddCartProvider>
  </AuthProvider>
  // </React.StrictMode>
);

