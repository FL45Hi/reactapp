import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Navbar, NavItem, Nav } from "reactstrap";
import ReactStrapForm from "./comp/ReactStrapForm";
import HookForm from "./comp/HookForm";
import UseFormikComp from "./comp/UseFormikComp";
import FormikComponent from "./comp/FormikComponent";

// Lazy Loading
// const Home = lazy(() => import("./Home"));
const ReactHookForm = lazy(() => import("./comp/ReactHookForm"));
// const About = lazy(() => import("./About"));

const NoPage = () => {
  return <h1>404 Not Found</h1>;
};

const Navigation = () => {
  return (
    <div
      style={{
        display: "block",
        width: 600,
        padding: 30,
      }}
    >
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/"> Home </Link>
          </NavItem>
          <NavItem> | </NavItem>
          <NavItem>
            <Link to="/1"> React Hook Form </Link>
          </NavItem>
          <NavItem> | </NavItem>
          <NavItem>
            <Link to="/2"> React Formik </Link>
          </NavItem>
          <NavItem> | </NavItem>
          <NavItem>
            <Link to="/3"> ReactStrap Form </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navigation />
      <h1>Form Library Ecosystems..</h1>
      <p>
        React Forms basic parts :
        <ul>
          <li>State manipulation</li>
          {/* Getting values in and out of form state */}
          <li>Form validation (and error messages)</li>
          {/* Validation and error messages */}
          <li>Form submission</li>
          {/* Handling form submission */}
        </ul>
      </p>

      <h5>Formik Library</h5>
      <p>
        three different ways to work with Formik:
        <ol>
          <li>
            Using the <em> useFormik hook</em>
          </li>
          <li>Using Formik with <em>React context</em> </li>
          <li>Using withFormik as a <em>higher-order component</em></li>
        </ol>
      </p>
    </>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/1" element={<ReactHookForm />} />
          <Route path="/2" element={<UseFormikComp />} />

          <Route path="/3" element={<ReactStrapForm />} />
          <Route path="/5" element={<FormikComponent />} />

          <Route path="/yupresolver" element={<HookForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
