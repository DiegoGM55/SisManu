interface GridProps {
  cols?: number;
  children: any;
}

const Grid = (props: GridProps) => {
  return (
    <div className={`grid grid-cols-${props.cols ?? 1} gap-4 w-full`}>
      {props.children}
    </div>
  );
};

export default Grid;
