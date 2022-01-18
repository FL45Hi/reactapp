import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FetchApi from "./components/FetchApi";
import AxiosCall from "./components/AxiosCall";
import CommentList from "./components/CommentList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home (Default with Fetch Api) </Link>
            </li>
            <li>
              <Link to="/axios">Click Here (Posts with Axios Library.) </Link>
            </li>

            <li>
              <Link to="/commentList">Comment Posts (Axios with then/error syntax.) </Link>
            </li>
          </ul>
        </nav>

        <Routes>

        <Route path="/commentList" element={<CommentList />} />
          <Route path="/fetchapi" element={<FetchApi />} />
          <Route path="/axios" element={<AxiosCall />} />
          <Route path="/" element={<FetchApi />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
