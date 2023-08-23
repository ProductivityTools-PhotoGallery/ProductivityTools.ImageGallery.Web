import "./App.css";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Session/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Gallery/:name" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
