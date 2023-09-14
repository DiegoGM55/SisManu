import Card from '@/components/issueReport/Card';
import { useAuth } from '@/context/auth-context';

const IssueReport = () => {
  const { login } = useAuth();

  login();

  return (
    <div>
      <div className="w-auto border-b-2 border-b-blue border-dotted mt-5">
        <h1 className="text-blue font-bold">Relatar Problema</h1>
      </div>

      <div className="mt-7 flex flex-col justify-center items-center">
        <form className="p-5 border border-zinc-200 w-full xl:w-[900px]">
          <h1 className="text-blue font-bold text-xl">
            Insira os problemas da sua casa
          </h1>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold">Selecione o bloco:</p>
            <select className="border border-zinc-200  flex-1">
              <option value="A">Bloco A</option>
              <option value="B">Bloco B</option>
              <option value="C">Bloco C</option>
              <option value="D">Bloco D</option>
            </select>
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold">Selecione o número da casa:</p>
            <select className="border border-zinc-200 flex-1">
              <option value="1">Casa 1</option>
              <option value="2">Casa 2</option>
              <option value="3">Casa 3</option>
              <option value="4">Casa 4</option>
            </select>
          </div>
          <div>
            <p className="font-bold mt-5">Descreva o problema:</p>
            <textarea className="mt-5 w-full h-32 border border-zinc-200" />
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold mt-5">Selecione o cômodo</p>
            <select className="mt-5 border border-zinc-200 flex-1">
              <option value="Sala">Sala</option>
              <option value="Quarto 1">Quarto 1</option>
              <option value="Quarto 2">Quarto 2</option>
              <option value="Quarto 3">Quarto 3</option>
              <option value="Quarto 4">Quarto 4</option>
              <option value="Cozinha">Cozinha</option>
              <option value="Banheiro1">Banheiro 1</option>
              <option value="Banheiro2">Banheiro 2</option>
              <option value="Fundo">Fundo</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold mt-5">Anexe uma foto (se necessário)</p>
            <input type="file" className="mt-5" />
          </div>
          <div className="flex justify-end">
            <button className="mt-5 bg-blue text-white w-64 font-bold py-2 px-4 rounded ">
              Adicionar problemas
            </button>
          </div>
        </form>
        <div className="p-5 border border-zinc-200 w-full xl:w-[900px]">
          <h1 className="text-blue font-bold text-xl mt-5">
            Problemas adicionados
          </h1>
          <div className="w-full">
            <div className="flex flex-row flex-wrap gap-10 pt-5">
              <Card
                block="Bloco A"
                house="Casa 1"
                room="Sala"
                description="Lâmpada queimada"
                date="10/10/2021"
              />
              <Card
                block="Bloco A"
                house="Casa 1"
                room="Cozinha"
                description="Pia entupida"
                date="10/10/2021"
              />
              <Card
                block="Bloco A"
                house="Casa 1"
                room="Cozinha"
                description="Pia entupida"
                date="10/10/2021"
              />
              <Card
                block="Bloco A"
                house="Casa 1"
                room="Cozinha"
                description="Pia entupida"
                date="10/10/2021"
              />
            </div>
            <div className="flex justify-end mt-5">
              <button className="mt-5 bg-blue text-white w-64 font-bold py-2 px-4 rounded ">
                Relatar todos problemas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueReport;
