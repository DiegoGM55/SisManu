import Message from '@/components/message/Message';
import { db, storage } from '@/services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

interface IssueReportProps {
  user: { email: string };
}

const IssueReport = ({ user }: IssueReportProps) => {
  const [message, setMessage] = useState(false);

  const router = useRouter();

  const [data, setData] = useState({
    block: 'A',
    house: '1',
    room: 'sala',
    description: '',
    category: 'eletrico'
  });
  const [progress, setProgress] = useState(0);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const uploadImage = async (file: File) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Espera o upload da imagem ser concluído
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          createReport(downloadURL);
        });
      }
    );
  };

  const createReport = async (imageURL) => {
    await addDoc(collection(db, 'reports'), {
      ...data,
      image: imageURL,
      email: user.email,
      status: 'Pendente',
      createdAt: new Date()
    });

    // redirecionar para a página de relatórios
    router.push({
      pathname: '/user/showReports',
      query: { message: 'Problemas reportados com sucesso' }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // adicionar a imagem no storage
      const file = e.target[5]?.files[0];
      if (!file) {
        createReport('');
        return;
      }
      uploadImage(file);
    } catch (error) {
      setMessage(true);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-auto border-b-2 border-b-blue border-dotted mt-5">
        <h1 className="text-blue font-bold">Relatar Problema</h1>
      </div>

      <div className="mt-7 flex flex-col justify-center items-center">
        {message && (
          <Message
            type="error"
            message="Houve algum erro ao cadastrar os problemas. Tente novamente."
          />
        )}
        <form
          onSubmit={handleSubmit}
          className="p-5 border border-zinc-200 w-full xl:w-[900px]"
        >
          <h1 className="text-blue font-bold text-xl">
            Insira os problemas da sua casa
          </h1>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold">Selecione o bloco:</p>
            <select
              name="block"
              onChange={handleChange}
              className="border border-zinc-200  flex-1"
            >
              <option value="A">Bloco A</option>
              <option value="B">Bloco B</option>
              <option value="C">Bloco C</option>
              <option value="D">Bloco D</option>
            </select>
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold">Selecione o número da casa:</p>
            <select
              name="house"
              onChange={handleChange}
              className="border border-zinc-200 flex-1"
            >
              <option value="1">Casa 1</option>
              <option value="2">Casa 2</option>
              <option value="3">Casa 3</option>
              <option value="4">Casa 4</option>
            </select>
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold">Selecione o tipo de problema:</p>
            <select
              name="category"
              onChange={handleChange}
              className="border border-zinc-200 flex-1"
            >
              <option value="eletrico">Elétrico</option>
              <option value="encanamento">Encanamento</option>
              <option value="estrutural">Estrutural</option>
              <option value="eletrodomestico">Eletrodoméstico</option>
              <option value="seguranca">Segurança</option>
            </select>
          </div>
          <div>
            <p className="font-bold mt-5">Descreva o problema:</p>
            <textarea
              name="description"
              onChange={handleChange}
              className="mt-5 w-full h-32 border border-zinc-200"
              required
            />
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold mt-5">Selecione o cômodo</p>
            <select
              name="room"
              onChange={handleChange}
              className="mt-5 border border-zinc-200 flex-1"
            >
              <option value="Sala">Sala</option>
              <option value="Quarto 1">Quarto 1</option>
              <option value="Quarto 2">Quarto 2</option>
              <option value="Quarto 3">Quarto 3</option>
              <option value="Quarto 4">Quarto 4</option>
              <option value="Cozinha">Cozinha</option>
              <option value="Banheiro 1">Banheiro 1</option>
              <option value="Banheiro 2">Banheiro 2</option>
              <option value="Fundo">Fundo</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="flex flex-row mt-5 gap-10">
            <p className="font-bold mt-5">Anexe uma foto (se necessário)</p>
            <input type="file" name="image" accept="image/*" className="mt-5" />
            {progress > 0 && (
              <progress
                value={progress}
                max="100"
                className="mt-5 w-full h-5"
              />
            )}
          </div>
          <div className="flex justify-end">
            <button
              className="mt-5 bg-blue text-white w-64 font-bold py-2 px-4 rounded"
              type="submit"
            >
              Adicionar problema
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueReport;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      user: session?.user
    }
  };
};
