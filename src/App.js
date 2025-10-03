import React from "react";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";


const App = ()=> {
  return (

      <BrowserRouter>
          <div className="overflow-x-hidden bg-white text-dark">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/team" element={<OurTeam />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
              <Footer />
          </div>
      </BrowserRouter>


  );
}

export default App;
