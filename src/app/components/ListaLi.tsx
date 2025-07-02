import Link from "next/link";

interface ListaLiProps {
  linkRoute: string;
  liTitle: string;
  target?: string;
}

export default function ListaLi(props: ListaLiProps) {
  return (
    <li className="transition hover:underline hover:scale-110">
      <Link target={props.target} href={props.linkRoute}>
        {props.liTitle}
      </Link>
    </li>
  );
}
