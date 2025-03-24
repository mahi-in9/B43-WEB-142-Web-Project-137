import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/signup/SignUpForm";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to /signup */}
        <Route path="/" element={<SignUpForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
