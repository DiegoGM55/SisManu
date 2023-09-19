import Link from 'next/link';

interface Props {
  name: string;
  adress: string;
}

const MenuItem = (props: Props) => {
  return (
    <Link className="menuItem" href={props.adress}>
      {props.name}
    </Link>
  );
};

export default MenuItem;
