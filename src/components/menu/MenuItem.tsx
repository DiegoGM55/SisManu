interface Props {
  item: string;
}

export default function MenuItem(props: Props) {
  return <div className="menuItem">{props.item}</div>;
}
