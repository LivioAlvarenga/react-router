import PostCard from "@/components/PostCard";
import posts from "@/json/posts.json";
import Wrapper from "@/components/Wrapper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
      <Wrapper>
        <ul className="my-12 flex flex-wrap gap-8 lg:-translate-y-24">
          {posts.map((post) => (
            <li
              className="w-full overflow-hidden rounded-xl shadow-2xl duration-500 ease-in-out md:w-[47%] lg:hover:-translate-y-4 lg:w-[23%]"
              key={post.id}
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </Wrapper>
  );
}
