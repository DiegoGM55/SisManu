import BlockList from '@/components/reportsList/BlockList';

const ReportsList = () => {
  return (
    <div className="min-w-[300px]">
      <div className="w-auto border-b-2 border-b-blue border-dotted mt-5">
        <h1 className="text-blue font-bold">Lista de reparos a fazer</h1>
      </div>
      <div>
        <BlockList block="Bloco A" />
        <BlockList block="Bloco B" />
        <BlockList block="Bloco C" />
        <BlockList block="Bloco D" />
      </div>
    </div>
  );
};

export default ReportsList;
