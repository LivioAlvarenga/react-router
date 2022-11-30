export default function Wrapper(props) {
  return <div className="w-full px-5 lg:mx-auto lg:max-w-7xl lg:px-0">{props.children}</div>;
}
