import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import ItemList from './ItemList';

interface BlockListProps {
  reports: ReportProps[];
  block: string;
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

const BlockList = ({ reports, block }: BlockListProps) => {
  const [blockListSwitch, setBlockListSwitch] = useState<boolean>(false);

  function groupReportsByHouse(reports: ReportProps[]): {
    [key: string]: ReportProps[];
  } {
    const reportsByHouse: { [key: string]: ReportProps[] } = {};

    for (const report of reports) {
      if (!reportsByHouse[report.house]) {
        reportsByHouse[report.house] = [];
      }

      reportsByHouse[report.house].push(report);
    }

    return reportsByHouse;
  }

  return (
    <div className="m-5">
      <div
        className="bg-zinc-100 text-xl font-medium p-3 border border-zinc-200 rounded flex justify-between cursor-pointer"
        onClick={() => setBlockListSwitch(!blockListSwitch)}
      >
        <h1 className="uppercase">Bloco {block}</h1>
        <span className="text-2xl">
          {blockListSwitch ? (
            <FaArrowDown className="transform rotate-180 ease-in duration-200" />
          ) : (
            <FaArrowDown className="ease-in duration-200" />
          )}
        </span>
      </div>
      {blockListSwitch && (
        <>
          {Object.entries(groupReportsByHouse(reports)).map(
            ([house, reports]) => (
              <ItemList key={house} house={house} reports={reports} />
            )
          )}
          {Object.entries(groupReportsByHouse(reports)).length === 0 && (
            <p className="text-center text-slate-400 border border-slate-300 p-5">
              Não há relatos para este bloco
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default BlockList;
