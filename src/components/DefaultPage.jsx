import Banner from "@/components/Banner";
import { Outlet } from "react-router-dom";

export default function DefaultPage({ children }) {
  return (
    <main>
      <Banner />
      <Outlet />
      {children}
    </main>
  );
}
