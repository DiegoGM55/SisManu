import { FaPlus, FaMinus } from 'react-icons/fa';
import Table from '../table/Table';
import { useState } from 'react';

interface ItemListProps {
  house: string;
}

export default function ItemList({ house }: ItemListProps) {
  const [itemListSwitch, setItemListSwitch] = useState<boolean>(false);

  return (
    <li className="flex gap-5 border border-zinc-200">
      <div
        className="flex gap-5 cursor-pointer"
        onClick={() => setItemListSwitch(!itemListSwitch)}
      >
        <p>{house}</p>
        {!itemListSwitch ? (
          <FaPlus className="mt-1 transform ease-linear duration-700" />
        ) : (
          <FaMinus className="mt-1 ease-in duration-300" />
        )}
      </div>
      {itemListSwitch && (
        <div className="w-[60%] flex m-auto transform ease-linear duration-300">
          <Table />
        </div>
      )}
    </li>
  );
}
