import LinkMenu from "../LinkMenu";
import dataMenu from "./menu.json";

export default function Menu() {
  return (
    <header className="w-full">
      <nav className=" h-[72px] px-5  md:h-28 lg:mx-auto lg:max-w-7xl lg:px-0">
        <ul className="flex h-full w-full items-center justify-center gap-12">
          {dataMenu.map((item) => (
            <LinkMenu
              text={item.text}
              to={item.to}
              colorText="text-fontMain"
              colorBorder="bg-fontMain"
              key={item.text}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
