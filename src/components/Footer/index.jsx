import icons from "./iconLink.json";
import IconList from "./IconList";

export default function Footer(props) {
  
  return (
    <footer className={`w-full text-base ${props.backgroundColor} ${props.textColor}`}>
      <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-7 lg:mx-auto lg:max-w-7xl lg:justify-between lg:px-0">
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
    </footer>
  );
}
