import "./App.css";
import Home from "./Home";
import SingIn from "./components/SignIn/SignIn";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      {/* <SingIn /> */}
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/" element={<SingIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
