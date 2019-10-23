import React from 'react';
import {Route, Redirect, Switch} from "react-router";
import PrivateRoute from './utils/PrivateRoute';
import "./App.css";

//component import
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingPage from './components/LandingPage';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Header />
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
        <Route exact path="/home" render={props => <Home {...props} />}/>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
