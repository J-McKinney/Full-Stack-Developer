import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Main from "./pages/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Full-Stack-Developer" element={<Landing />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
