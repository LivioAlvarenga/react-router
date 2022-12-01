import LinkMenu from "@/components/Menu/LinkMenu";
import Wrapper from "@/components/Wrapper";
import dataMenu from "./menu.json";

export default function Menu() {
  return (
    <header className="w-full">
      <Wrapper>
        <nav className=" h-[72px] md:h-28">
          <ul className="flex h-full w-full items-center justify-center gap-12">
            {dataMenu.map((item) => (
              <LinkMenu
                text={item.text}
                to={item.to}
                colorText="text-azulDark"
                colorBorder="bg-azulDark"
                key={item.text}
              />
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}
