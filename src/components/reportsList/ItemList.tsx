import { FaPlus, FaMinus } from 'react-icons/fa';
import Table from '../tableMaintenance/Table';
import { useState } from 'react';

interface ItemListProps {
  house: string;
  reports: ReportProps[];
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

const ItemList = ({ house, reports }: ItemListProps) => {
  const [itemListSwitch, setItemListSwitch] = useState<boolean>(false);

  return (
    <li className="flex flex-col border border-zinc-200 p-5">
      <div
        className="flex gap-5 cursor-pointer"
        onClick={() => setItemListSwitch(!itemListSwitch)}
      >
        <p>Casa {house}</p>
        {!itemListSwitch ? (
          <FaPlus className="mt-1 transform ease-linear duration-700" />
        ) : (
          <FaMinus className="mt-1 ease-in duration-300" />
        )}
      </div>
      {itemListSwitch && (
        <div className="flex m-auto w-[100%] transform ease-linear duration-300">
          <Table content={reports} />
        </div>
      )}
    </li>
  );
};

export default ItemList;
