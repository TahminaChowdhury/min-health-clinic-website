import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Login from "./Components/Shared/Login/Login";
import Signup from "./Components/Shared/Signup/Signup";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import Aboutus from "./Components/Aboutus/Aboutus";
import Doctors from "./Components/Doctors/Doctors";
import ContactUs from "./Components/ContactUs/ContactUs";
import AuthProvider from "./Context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>

          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
