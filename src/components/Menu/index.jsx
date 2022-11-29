import LinkMenu from "../LinkMenu";
import dataMenu from "./menu.json";

export default function Menu() {
  return (
    <header className=" w-full">
      <nav className="flex h-20 items-center justify-center gap-12 px-5  md:h-28 lg:mx-auto lg:max-w-7xl lg:px-0">
        <LinkMenu dataMenu={dataMenu} />
      </nav>
    </header>
  );
}
