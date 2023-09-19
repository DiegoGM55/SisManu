import Table from '@/components/table/Table';

export default function ShowReports() {
  return (
    <div className="min-w-[300px]">
      <div className="w-auto border-b-2 border-b-blue border-dotted mt-5">
        <h1 className="text-blue font-bold">Vizualizar problemas reportados</h1>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="border border-zinc-200 w-[80%] p-10 rounded-lg min-w-fit">
          <h1 className="text-zinc-400 text-xl font-bold">
            Problemas reportados por você
          </h1>
          <Table />
        </div>
      </div>
    </div>
  );
}
