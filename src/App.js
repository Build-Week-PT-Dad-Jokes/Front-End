import React from 'react';
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'

function App() {
  return (
    <div className="App">
      <FormikAccountForm validateOnChange={false} validateOnBlur={false}/>
      <FormikLoginForm validateOnChange={false} validateOnBlur={false}/>
    </div>
  );
}

export default App;
