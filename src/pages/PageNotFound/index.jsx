import backgroundPage from "@/assets/images/pageNotFoundBackground.webp";
import Wrapper from "@/components/Wrapper";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full">
      <img
        className="absolute top-0 -z-10 h-full w-full bg-gradient-to-r from-[#041833] to-[#123663] object-cover"
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
          Voltar Para Home
        </button>
      </Wrapper>
    </div>
  );
}
