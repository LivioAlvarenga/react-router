import DefaultPage from "@/components/DefaultPage";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import ScrollToTop from "@/components/ScrollToTop";
import AboutMe from "@/pages/AboutMe";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import Post from "@/pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobre-mim" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
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
