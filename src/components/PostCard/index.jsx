import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="group grid h-[320px] cursor-pointer grid-rows-2">
        <div className="overflow-hidden">
          <img
            className="object-cover duration-1000 ease-in-out lg:group-hover:scale-125"
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa do post"
          />
        </div>
        <div className="grid grid-rows-2 items-center justify-center  bg-white p-3">
          <h2 className="text-center font-playfair text-xl font-semibold">
            {post.titulo}
          </h2>
          <button className=" self-center justify-self-center rounded-3xl bg-azulLight px-6 py-3 text-xl tracking-wider text-white shadow-md duration-1000  ease-in-out lg:group-hover:bg-azulDark lg:group-hover:px-9  lg:group-hover:shadow-fontPost">
            Ler
          </button>
        </div>
      </div>
    </Link>
  );
}
