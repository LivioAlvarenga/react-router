import SubTitle from "@/components/SubTitle";
import Wrapper from "@/components/Wrapper";

export default function PostModel({ children, title, banner, position }) {
  return (
    <article className=" text-fontPost ">
      <SubTitle position={position} banner={banner} title={title} />
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </article>
  );
}
