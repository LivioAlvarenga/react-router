import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sobre-min" element={<AboutMe />}/>
    <Route path="*" element={<ErrorPage />}/>
   </Routes>
  </BrowserRouter>
  );
}
