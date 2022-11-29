import circuloColorido from "@/assets/images/circulo_colorido.png";
import minhaFoto from "@/assets/images/minha_foto.webp";

export default function Banner() {
  return (
    <div className="bg-azulDark">
      <div className="grid grid-cols-1 px-5 py-8 text-white md:grid-cols-2 md:gap-4 lg:mx-auto lg:max-w-7xl">
        <div className="my-8 flex flex-col justify-around gap-8">
          <h1 className="font-playfair text-6xl font-bold">Olá, Mundo!</h1>
          <p className="font-playfair text-2xl">
            Boas vindas ao meu espaço pessoal! Eu sou Livio Alvarenga, Engenheiro de
            Produção, Dev Backend e Frontend. Com ampla vivência na área gerencial, sou um
            profissional que consegue unir a experiência prática do negócio com o uso de
            tecnologia, buscando inovação, eficiência e solução de problemas de forma
            personalizada.
          </p>
        </div>
        <div className="relative h-[307px] md:my-auto lg:h-[390px]">
          <img
            className="absolute right-1/2 w-[241px] translate-x-1/3 md:w-[266px] lg:w-[361px]"
            src={circuloColorido}
            aria-hidden={true}
          />
          <img
            className="absolute bottom-9 left-1/2 w-[171px] rounded-full md:bottom-0 md:w-[188px] lg:w-[260px]"
            src={minhaFoto}
            alt="Livio Alvarenga"
          />
        </div>
      </div>
    </div>
  );
}
