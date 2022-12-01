import DefaultPage from "@/components/DefaultPage";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import AboutMe from "@/pages/AboutMe";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Post from "@/pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobre-mim" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer
        backgroundColor={"bg-azulDark"}
        textColor={"text-white"}
        iconColor={"fill-white"}
        hoverIconColor={"group-hover:lg:fill-azulLight"}
      />
    </BrowserRouter>
  );
}
