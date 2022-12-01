import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

export default function PostModel({ children, title, banner, position, titleColor }) {
  return (
    <article className=" text-fontPost ">
      <Title position={position} banner={banner} title={title} titleColor={titleColor} />
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </article>
  );
}
