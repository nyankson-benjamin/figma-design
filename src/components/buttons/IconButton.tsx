
type IBtnProps = {
  children: React.ReactNode;
  onClick:()=>void 
};
export default function IconButton(props: Readonly<IBtnProps>) {
  return <button onClick={props.onClick} className="rounded-full p-0.5  hover:bg-gray-50 hover:text-[black]">{props.children}</button>;
}
