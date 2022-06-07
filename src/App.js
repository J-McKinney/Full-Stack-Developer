import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Full-Stack-Developer" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
