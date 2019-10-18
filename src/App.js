import React from "react";
import { Route } from "react-router";

//component import
import FormikAccountForm from "./components/user/CreateAccount";
import FormikLoginForm from "./components/user/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        exact
        path="/signup"
        render={props => (
          <FormikAccountForm
            props={props}
            validateOnChange={false}
            validateOnBlur={false}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <FormikLoginForm validateOnChange={false} validateOnBlur={false} />
        )}
      />
      <Route exact path="/" render={props => <LandingPage {...props} />} />
      <Footer />
    </div>
  );
}

export default App;
