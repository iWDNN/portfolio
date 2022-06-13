import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Work from "./Routes/Work";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
