import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ProductProvider } from './context/ProductContext';
import { Provider as AddCartProvider } from './context/AddCartContext';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as AlertProvider } from './context/AlertContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <AddCartProvider>
      <ProductProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ProductProvider>
    </AddCartProvider>
  </AuthProvider>
  // </React.StrictMode>
);

