import BlockList from '../../components/reportsList/BlockList';
import { db } from '@/services/firebaseConnection';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

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

interface ReportsListProps {
  reportsBlockA: ReportProps[];
  reportsBlockB: ReportProps[];
  reportsBlockC: ReportProps[];
  reportsBlockD: ReportProps[];
}

const ReportsList = (allReports: ReportsListProps) => {
  return (
    <div className="min-w-[300px]">
      <div className="w-auto border-b-2 border-b-blue border-dotted mt-5">
        <h1 className="text-blue font-bold">Lista de reparos a fazer</h1>
      </div>
      <div>
        <BlockList reports={allReports.reportsBlockA} block="A" />
        <BlockList reports={allReports.reportsBlockB} block="B" />
        <BlockList reports={allReports.reportsBlockC} block="C" />
        <BlockList reports={allReports.reportsBlockD} block="D" />
      </div>
    </div>
  );
};

export default ReportsList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const allReports = await collection(db, 'reports');
  const q = query(allReports, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  const reportsBlockA: ReportProps[] = [];
  const reportsBlockB: ReportProps[] = [];
  const reportsBlockC: ReportProps[] = [];
  const reportsBlockD: ReportProps[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    const report = {
      id: doc.id,
      block: data.block,
      house: data.house,
      room: data.room,
      description: data.description,
      category: data.category,
      image: data.image,
      status: data.status,
      createdAt: data.createdAt.toDate().toLocaleDateString('pt-BR')
    };

    switch (report.block) {
      case 'A':
        reportsBlockA.push(report);
        break;
      case 'B':
        reportsBlockB.push(report);
        break;
      case 'C':
        reportsBlockC.push(report);
        break;
      case 'D':
        reportsBlockD.push(report);
        break;
    }
  });

  return {
    props: {
      reportsBlockA: reportsBlockA,
      reportsBlockB: reportsBlockB,
      reportsBlockC: reportsBlockC,
      reportsBlockD: reportsBlockD
    }
  };
};
