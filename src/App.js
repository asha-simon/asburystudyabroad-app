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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/main-courses" component={MainCourses} />
          <Route exact path="/destinations" component={Destinations} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
