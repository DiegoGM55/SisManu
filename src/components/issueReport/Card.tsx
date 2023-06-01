interface CardProps {
  block: string;
  house: string;
  room: string;
  description: string;
  date: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="p-4 border border-zinc-200 rounded w-64 text-zinc-500">
      <p className="font-bold  text-center mb-1">{props.block}</p>
      <p>
        <span className="font-bold mr-2">Local:</span>
        {props.house} - {props.room}
      </p>
      <p>
        <span className="font-bold mr-2">Problema:</span>
        {props.description}
      </p>
      <p>
        <span className="font-bold mr-2">Data:</span>
        {props.date}
      </p>
    </div>
  );
}
