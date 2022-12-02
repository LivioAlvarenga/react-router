import backgroundPage from "@/assets/images/pageNotFoundBackground.webp";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  /* Cria um estado inicial da posição de x e y do mouse ao mouse entrar no background
  Usamos esta medida para diminuir com mouse position atual e assim suavizar o primeiro movimento */
  const [mousePositionStart, setMousePositionStart] = useState({
    x: 0,
    y: 0,
  });

  /* Criando estado para medir posição do mouse na tela*/
  const [mousePosition, setMousePosition] = useState({
    x: "0px",
    y: "0px",
  });

  function handleMouseMove(e) {
    console.log("Start = ", mousePositionStart, "Now = ", mousePosition);
    setMousePosition({
      x:
        mousePositionStart.x === 0
          ? "-1px"
          : -(e.clientX - mousePositionStart.x) / 7 + "px",
      y:
        mousePositionStart.y === 0
          ? "-1px"
          : -(e.clientY - mousePositionStart.y) / 7 + "px",
    });
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden "
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={(e) =>
        setMousePositionStart({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <img
        style={{
          objectPosition: `${mousePosition.x} ${mousePosition.y}`,
        }}
        className="absolute top-0 -z-10 h-screen w-full bg-gradient-to-r from-azulDark to-[#123663] object-cover"
        src={backgroundPage}
        alt=""
      />
      <Wrapper className="z-50 flex h-full flex-col items-center justify-center text-white">
        <h2 className="mb-[12vh] text-[20vh] leading-4 text-azulLight lg:mb-[20vh] lg:text-[35vh]">
          404
        </h2>
        <h1 className="mb-8 font-playfair text-2xl font-bold md:text-4xl lg:text-5xl">
          Ops! Página não encontrada.
        </h1>
        <p className="mb-8 text-center text-xl md:text-2xl lg:max-w-5xl lg:text-3xl">
          Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e
          recarregue a página, ou volte para a página inicial.
        </p>
        <button
          className="cursor-pointer rounded-3xl bg-azulLight px-6 py-3 text-xl tracking-wider shadow-md duration-1000 ease-in-out lg:hover:bg-azulDark lg:hover:px-9"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </Wrapper>
    </div>
  );
}
