interface Props {
  item: string;
}

export default function (props: Props) {
  return (
    <div className='menuItem'>
      {props.item}
    </div>
  );
}
