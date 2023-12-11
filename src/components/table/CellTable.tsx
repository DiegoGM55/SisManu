interface CellTableProps {
  block: string;
  house: string;
  room: string;
  description: string;
  date: string;
  status: string;
  photo: string;
}

const CellTable = (props: CellTableProps) => {
  return (
    <tr>
      <td>{props.block}</td>
      <td>{props.house}</td>
      <td>{props.room}</td>
      <td>{props.description}</td>
      <td>
        {props.photo === '' ? (
          <p>Sem foto</p>
        ) : (
          <a
            href={props.photo}
            target="_blank"
            rel="noreferrer"
            className="underline text-blue"
          >
            Ver foto
          </a>
        )}
      </td>
      <td>{props.status}</td>
      <td>{props.date}</td>
    </tr>
  );
};

export default CellTable;
