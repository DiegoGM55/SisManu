import Message from '@/components/message/Message';
import Table from '@/components/table/Table';
import { db } from '@/services/firebaseConnection';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

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

interface ShowReportsProps {
  reportsData: ReportProps[];
}

export default function ShowReports({ reportsData }: ShowReportsProps) {
  const router = useRouter();
  const { message } = router.query;

  return (
    <div className="min-w-[300px]">
      <div className="w-auto border-b-2 border-b-blue border-dotted mt-5">
        <h1 className="text-blue font-bold">Vizualizar problemas reportados</h1>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        {message && (
          <div className="w-[80%]">
            <Message type="success" message={message as string} />
          </div>
        )}
        <div className="border border-zinc-200 w-[80%] p-10 rounded-lg min-w-fit">
          <h1 className="text-zinc-400 text-xl font-bold">
            Problemas reportados por você
          </h1>
          <Table content={reportsData} />

          {reportsData.length === 0 && (
            <p className="text-zinc-400 text-xl font-bold mt-5">
              Você não reportou nenhum problema
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const reports = await collection(db, 'reports');
  const q = query(reports, where('email', '==', session.user.email));
  const snapshot = await getDocs(q);

  const reportsData: ReportProps[] = [];
  snapshot.forEach((doc) => {
    reportsData.push({
      id: doc.id,
      block: doc.data().block,
      house: doc.data().house,
      room: doc.data().room,
      description: doc.data().description,
      category: doc.data().category,
      image: doc.data().image,
      status: doc.data().status,
      createdAt: doc.data().createdAt.toDate().toLocaleDateString('pt-BR')
    });
  });

  return {
    props: {
      session,
      reportsData: reportsData
    }
  };
};
