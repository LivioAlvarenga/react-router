import { Link, useLocation } from "react-router-dom";

export default function LinkMenu(props) {
  const localization = useLocation();
  const onActive = localization.pathname === props.to;
  return (
    <li className="h-full">
      <Link to={props.to}>
        <div className="flex h-full flex-col items-center justify-center">
          <p className={`text-xl ${props.colorText}`}>{props.text}</p>
          <span
            className={`${onActive ? "opacity-100" : "opacity-0"} h-[3px] w-8  ${
              props.colorBorder
            } lg:w-9`}
          />
        </div>
      </Link>
    </li>
  );
}
