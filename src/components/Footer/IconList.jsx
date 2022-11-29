import React from "react";

export default function IconList(props) {
  return (
    <ul className="mb-5 flex flex-wrap items-center justify-center gap-7 lg:mb-0">
      {props.icons.map((icon) => {
        return (
          <li className="group lg:hover:animate-bounce" key={icon.id}>
            <a href={icon.href} target="_blank" rel="noreferrer" title={icon.title}>
              <svg
                className={`duration-500 ease-in-out ${props.hoverIconColor} ${props.iconColor}`}
                width={icon.width}
                height={icon.height}
                viewBox={icon.viewBox}
              >
                <path d={icon.path} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
