import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Works" element={<Works />}></Route>
        <Route path="/Testimonials" element={<Testimonials />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
