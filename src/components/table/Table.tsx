import CellTable from './CellTable';

const Table = () => {
  return (
    <table className="table">
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
        <CellTable
          block="A"
          house="1"
          room="Sala"
          description="A porta está quebrada"
          photo="foto"
          status="Pendente"
          date="12/12/2021"
        />
        <CellTable
          block="A"
          house="1"
          room="Sala"
          description="A porta está quebrada"
          photo="foto"
          status="Pendente"
          date="12/12/2021"
        />
        <CellTable
          block="A"
          house="1"
          room="Sala"
          description="A porta está quebrada"
          photo="foto"
          status="Pendente"
          date="12/12/2021"
        />
        <CellTable
          block="A"
          house="1"
          room="Sala"
          description="A porta está quebrada"
          photo="foto"
          status="Pendente"
          date="12/12/2021"
        />
        <CellTable
          block="A"
          house="1"
          room="Quarto 2"
          description="A cama está quebrada"
          photo="foto"
          status="Pendente"
          date="12/12/2021"
        />
        <CellTable
          block="A"
          house="1"
          room="Quarto 2"
          description="A cama está quebrada"
          photo="foto"
          status="Pendente"
          date="12/12/2021"
        />
      </tbody>
    </table>
  );
};

export default Table;
