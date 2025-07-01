import Link from "next/link";

interface ListaLiProps {
  linkRoute: string;
  liTitle: string;
}

export default function ListaLi(props: ListaLiProps) {
  return (
    <li className="transition hover:underline hover:scale-110">
      <Link href={props.linkRoute}>{props.liTitle}</Link>
    </li>
  );
}
