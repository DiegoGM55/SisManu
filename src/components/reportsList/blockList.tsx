import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

interface BlockListProps {
  block: string;
}

export default function BlockList({ block }: BlockListProps) {
  const [blockListSwitch, setBlockListSwitch] = useState<boolean>(false);

  return (
    <div className="m-5">
      <div
        className="bg-[#2196f3] text-xl text-white font-bold p-3 border border-zinc-200 rounded flex justify-between cursor-pointer"
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
        <ul className="mt-2 ml-5">
          <li>Casa 1</li>
          <li>Casa 2</li>
          <li>Casa 3</li>
          <li>Casa 4</li>
        </ul>
      )}
    </div>
  );
}
