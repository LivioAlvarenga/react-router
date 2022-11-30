import imgBanner from "@/assets/images/imgBanner.webp";
import minhaFoto from "@/assets/images/minha_foto.webp";
import Wrapper from "@/components/Wrapper";

export default function Banner() {
  return (
    <div className="bg-azulDark">
      <Wrapper>
        <div className="grid grid-cols-1 gap-10 py-8 text-white md:grid-cols-2 md:gap-4 lg:py-36 ">
          <div className="my-8 flex flex-col justify-around gap-8">
            <h1 className="font-playfair text-6xl font-bold">Olá, Mundo!</h1>
            <p className="font-playfair text-2xl">
              Boas vindas ao meu espaço pessoal! Eu sou Livio Alvarenga, Engenheiro de
              Produção, Dev Backend e Frontend. Com ampla vivência na área gerencial, sou
              um profissional que consegue unir a experiência prática do negócio com o uso
              de tecnologia, buscando inovação, eficiência e solução de problemas de forma
              personalizada.
            </p>
          </div>
          <div className="relative h-[307px] md:my-auto lg:h-[390px]">
            <img
              className="absolute bottom-1/2 w-full translate-y-[40%] lg:w-[90%] lg:translate-y-1/2 "
              src={imgBanner}
              aria-hidden={true}
            />
            <img
              className="absolute bottom-9 left-1/2 w-[171px] rounded-full shadow-sm shadow-azulLight md:bottom-0 md:w-[188px] md:shadow md:shadow-azulLight lg:left-[60%] lg:w-[260px] "
              src={minhaFoto}
              alt="Livio Alvarenga"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
