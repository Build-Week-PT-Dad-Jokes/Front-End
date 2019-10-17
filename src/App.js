import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'
function App() {
  return (
    <div className="App">
      <FormikAccountForm />
      <FormikLoginForm />
    </div>
  );
}

export default App;
