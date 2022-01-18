import "./App.css";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
// import ProductPage from "./components/ProductPage/ProductPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/SingIn" element={<ProductPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
