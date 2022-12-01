import Wrapper from "@/components/Wrapper";

export default function SubTitle({ position, banner, title }) {
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
        <h2 className=" font-playfair text-5xl font-bold duration-700 ease-in-out lg:text-6xl  lg:group-hover:text-7xl  lg:group-hover:text-azulLight/70">
          {title}
        </h2>
      </Wrapper>
    </div>
  );
}
