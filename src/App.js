import React from 'react';
import {Route} from "react-router"

//component import
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'

function App() {
  return (
    <div className="App">
      <Route 
        exact 
        path="/signup" 
        render={()=> 
          <FormikAccountForm validateOnChange={false} validateOnBlur={false}/>
        }
      />
      <Route 
        exact 
        path="/login" 
        render={()=> 
          <FormikLoginForm validateOnChange={false} validateOnBlur={false}/>
        }
      />
    </div>
  );
}

export default App;
