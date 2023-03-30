import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LocationInfo from "./pages/LocationInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:id" element={<LocationInfo />} />
    </Routes>
  );
}

export default App;
