import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import AboutFranchise from "./components/AboutFranchise";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServicesGrid />
                <AboutFranchise />
                <ApplicationForm />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
