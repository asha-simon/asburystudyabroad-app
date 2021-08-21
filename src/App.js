import Home from "./components";
import "boxicons";
import { useEffect } from "react";
import AOS from "aos";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Destinations from "./components/Destinations";
import MainCourses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import SubCourseList from "./components/Courses/course-list";
import DestinationDetails from "./components/Destinations/destination-details";
import Services from "./components/Services";
import Login from "./components/Login/login";
import Signup from "./components/Login/sign-up";
import { ToastProvider } from 'react-toast-notifications';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ToastProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/main-courses" component={MainCourses} />
          <Route exact path="/destinations" component={Destinations} />
          <Route exact path="/destinations/:countryName" component={DestinationDetails}/>
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/services" component={Services}/>
          <Route exact path="/main-courses/:id" component={SubCourseList}/>
        </Switch>
      </Router>
      </ToastProvider>
  );
}

export default App;
