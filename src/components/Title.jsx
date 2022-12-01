import Wrapper from "@/components/Wrapper";

export default function Title({ position, banner, title, titleColor }) {
  return (
    <div className="group relative flex h-28 items-center md:h-48 lg:h-56">
      <div className="absolute top-0 -z-10 h-full w-full overflow-hidden" id="banner">
        <img
          className={`w-full object-cover opacity-30 duration-1000 ease-in-out lg:group-hover:opacity-100 ${position}`}
          src={banner}
          lt="imagem de programação eat code sleep e repeat"
        />
      </div>
      <Wrapper>
        <h2
          className={`font-playfair text-3xl font-bold duration-700 ease-in-out md:text-5xl lg:text-6xl  lg:group-hover:text-7xl ${titleColor}`}
        >
          {title}
        </h2>
      </Wrapper>
    </div>
  );
}
