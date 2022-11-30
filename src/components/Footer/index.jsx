import Wrapper from "@/components/Wrapper";
import icons from "./iconLink.json";
import IconList from "./IconList";

export default function Footer(props) {
  return (
    <footer className={`w-full text-base ${props.backgroundColor} ${props.textColor}`}>
      <Wrapper>
        <div className="flex flex-wrap items-center justify-center gap-5 py-7 lg:justify-between">
          <IconList
            icons={icons}
            iconColor={props.iconColor}
            hoverIconColor={props.hoverIconColor}
          />

          <p className="">
            Desenvolvido por{" "}
            <a
              className="font-bold"
              href="https://www.livioalvarenga.com"
              target="_blank"
              rel="noreferrer"
              title="Portfolio Livio Alvarenga"
            >
              Livio Alvarenga
            </a>
            .
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
