import React from 'react';
import {Route, Redirect, Switch} from "react-router";
import PrivateRoute from './utils/PrivateRoute';
import "./App.css";

//component import
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'
import Footer from "./components/Footer"
import LandingPage from './components/LandingPage';
import Home from "./components/Home"
import CreateLoginHeader from "./components/CreateLoginHeader";

function App() {
  return (
    <div className="App">
      <CreateLoginHeader />
      <Switch>
        <Route 
          exact 
          path="/signup" 
          render={props=> 
            <FormikAccountForm {...props} validateOnChange={false} validateOnBlur={false}/>
          }
        />
        <Route 
          exact 
          path="/login" 
          render={props=> 
            <FormikLoginForm {...props} validateOnChange={false} validateOnBlur={false}/>
          }
        />
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <PrivateRoute exact path="/home" render={props => <Home {...props} />}/>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
