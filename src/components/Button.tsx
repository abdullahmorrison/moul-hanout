import Link from "next/link";

export default function Button({
  path,
  btnText,
}: {
  path: string;
  btnText: string;
}) {
  return (
    <Link
      href={path}
      className="rounded-lg border-2 border-secondary p-4 text-2xl font-bold text-white transition-colors duration-300 hover:bg-secondary hover:text-primary"
    >
      {btnText}
    </Link>
  );
}
