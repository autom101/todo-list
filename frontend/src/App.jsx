import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

//Components

function App() {
  return (
    <Router>
      <div className="flex max-h-screen min-h-screen mx-auto 2xl:container">
        <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
