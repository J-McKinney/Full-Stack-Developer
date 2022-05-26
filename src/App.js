import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
