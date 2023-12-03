import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
