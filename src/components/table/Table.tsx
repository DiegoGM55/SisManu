import CellTable from './CellTable';

interface TableProps {
  content: ReportProps[];
}

interface ReportProps {
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

const Table = ({ content }: TableProps) => {
  return (
    <table className="table w-[100%]">
      <thead>
        <tr>
          <th>Bloco</th>
          <th>Casa</th>
          <th>Cômodo</th>
          <th>Descrição</th>
          <th>Foto</th>
          <th>Status</th>
          <th>Data de reporte</th>
        </tr>
      </thead>
      <tbody>
        {content.map((report) => (
          <CellTable
            key={report.id}
            block={report.block}
            house={report.house}
            room={report.room}
            description={report.description}
            photo={report.image}
            status={report.status}
            date={report.createdAt}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
