import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import ItemList from './ItemList';

interface BlockListProps {
  block: string;
}

export default function BlockList({ block }: BlockListProps) {
  const [blockListSwitch, setBlockListSwitch] = useState<boolean>(false);

  return (
    <div className="m-5">
      <div
        className="bg-zinc-100 text-xl font-medium p-3 border border-zinc-200 rounded flex justify-between cursor-pointer"
        onClick={() => setBlockListSwitch(!blockListSwitch)}
      >
        <h1 className="uppercase">{block}</h1>
        <span className="text-2xl">
          {blockListSwitch ? (
            <FaArrowDown className="transform rotate-180 ease-in duration-200" />
          ) : (
            <FaArrowDown className="ease-in duration-200" />
          )}
        </span>
      </div>
      {blockListSwitch && (
        <ul className="text-lg">
          <ItemList house="Casa 1" />
          <ItemList house="Casa 2" />
          <ItemList house="Casa 3" />
          <ItemList house="Casa 4" />
        </ul>
      )}
    </div>
  );
}
