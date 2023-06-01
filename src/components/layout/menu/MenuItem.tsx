import Link from 'next/link';

interface Props {
  name: string;
  adress: string;
}

export default function MenuItem(props: Props) {
  console.log(props.adress);
  return (
    <Link className="menuItem" href={props.adress}>
      {props.name}
    </Link>
  );
}
