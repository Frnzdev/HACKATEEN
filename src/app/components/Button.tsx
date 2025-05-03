import Link from "next/link";

interface ButtonProps {
  linkRoute: string;
  linkTitle: string;
}

export default function ButtonLink(props: ButtonProps) {
  return (
    <Link
      href={props.linkRoute}
      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 text-center dark:bg-black/50 dark:text-white dark:border dark:border-white dark:hover:bg-gray-200 duration-200 dark:hover:text-black"
    >
      {props.linkTitle}
    </Link>
  );
}
