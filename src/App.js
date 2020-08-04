import React from 'react';
import './app.scss'
import OrderForm from './pages/order-form';
import OrderInfo from './pages/order-info';
import Login from './pages/login';

function App() {
  return (
    <div>
      {/*note: should using routes, should settimeout for clear session*/}
      <OrderForm />
      <OrderInfo />
      <Login /> 
    </div>
  );
}

export default App;
