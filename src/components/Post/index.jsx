export default function Post({ post }) {
  return (
    <div className="group grid h-[300px] cursor-pointer grid-rows-2">
      <div className="overflow-hidden">
        <img
          className="object-cover duration-1000 ease-in-out lg:group-hover:scale-125"
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-7 bg-white">
        <h2 className="font-playfair text-xl font-semibold">{post.titulo}</h2>
        <button className=" rounded-3xl bg-azulLight px-6 py-3 text-xl tracking-wider text-white shadow-md duration-1000  ease-in-out lg:group-hover:bg-azulDark lg:group-hover:px-9  lg:group-hover:shadow-fontPost">
          Ler
        </button>
      </div>
    </div>
  );
}
