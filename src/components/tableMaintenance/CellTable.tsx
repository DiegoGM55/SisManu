import { useRouter } from 'next/router';

interface CellTableProps {
  id: string;
  block: string;
  house: string;
  room: string;
  description: string;
  category: string;
  image: string;
  status: string;
  createdAt: string;
}

const CellTable = (props: CellTableProps) => {
  const router = useRouter();

  function navegateToPageProblem() {
    router.push(`/maintenance/reports/${props.id}`);
  }

  return (
    <tr onClick={navegateToPageProblem}>
      <td>{props.block}</td>
      <td>{props.house}</td>
      <td>{props.room}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>
        {props.image === '' ? (
          <p>Sem foto</p>
        ) : (
          <a
            href={props.image}
            target="_blank"
            rel="noreferrer"
            className="underline text-blue"
          >
            Ver foto
          </a>
        )}
      </td>
      <td>{props.status}</td>
      <td>{props.createdAt}</td>
    </tr>
  );
};

export default CellTable;
