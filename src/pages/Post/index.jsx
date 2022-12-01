import bannerBlog from "@/assets/images/bannerBlog.webp";
import DefaultPage from "@/components/DefaultPage";
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
      </PostModel>
    </DefaultPage>
  );
}
