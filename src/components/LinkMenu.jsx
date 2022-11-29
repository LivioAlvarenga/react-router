import { Link, useLocation } from "react-router-dom";

export default function LinkMenu(props) {
  const localization = useLocation();
  return (
    <>
      {props.dataMenu.map((item) => {
        const onActive = localization.pathname === item.to;
        return (
          <div className="relative" key={item.text}>
            <Link className="text-xl text-fontMain" to={item.to}>
              {item.text}
            </Link>
            <span
              className={`${
                onActive ? "block" : "hidden"
              } absolute right-1/2 -bottom-1 h-[3px] w-6 translate-x-1/2 bg-fontMain lg:w-7`}
            />
          </div>
        );
      })}
    </>
  );
}
