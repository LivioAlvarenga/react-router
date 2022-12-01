import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

export default function PostModel({ children, title, banner, position }) {
  return (
    <article className=" text-fontPost ">
      <Title position={position} banner={banner} title={title} />
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </article>
  );
}
