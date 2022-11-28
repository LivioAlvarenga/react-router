import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sobre-nos" element={<AboutUs />}/>
    <Route path="*" element={<ErrorPage />}/>
   </Routes>
  </BrowserRouter>
  );
}
