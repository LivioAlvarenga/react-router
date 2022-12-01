import bannerBlog from "@/assets/images/bannerBlog.webp";
import DefaultPage from "@/components/DefaultPage";
import PostCard from "@/components/PostCard";
import PostModel from "@/components/PostModel";
import Wrapper from "@/components/Wrapper";
import posts from "@/json/posts.json";
import PageNotFound from "@/pages/PageNotFound";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function Post() {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

  if (!post) {
    return <PageNotFound />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(parameters.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    /* banner={`/assets/posts/${post.id}/capa.png`} */
    <DefaultPage>
      <PostModel
        title={post.titulo}
        titleColor="lg:group-hover:text-white"
        banner={bannerBlog}
        position="object-[0px_-20px] md:object-[0px_-60px] lg:object-[0px_-205px]"
      >
        <Wrapper className="imgCenter prose my-8 max-w-none px-0 prose-headings:text-azulDark prose-a:text-azulDark hover:prose-a:text-azulLight md:prose-lg lg:my-20 lg:prose-xl">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </Wrapper>

        <h2 className="mb-8 font-playfair text-2xl font-bold md:text-4xl lg:text-5xl">
          Outros posts que você pode gostar:
        </h2>

        <ul className="my-12 flex flex-wrap justify-between gap-8 ">
          {recommendedPosts.map((post) => (
            <li
              className="w-full overflow-hidden rounded-xl shadow-2xl duration-500 ease-in-out md:w-[47%] lg:w-[23%] lg:hover:-translate-y-4"
              key={post.id}
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </PostModel>
    </DefaultPage>
  );
}
