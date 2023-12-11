import { db } from '@/services/firebaseConnection';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ReportProps {
  reportDetails: {
    id: string;
    block: string;
    house: string;
    room: string;
    description: string;
    category: string;
    image: string;
    status: string;
    createdAt: string;
  };
}

const ReportPage = ({ reportDetails }: ReportProps) => {
  const router = useRouter();

  async function updateStatus() {
    try {
      const docRef = doc(db, 'reports', reportDetails.id);

      await updateDoc(docRef, {
        status: 'Concluído'
      });
    } catch (err) {
      console.log(err);
    }

    //reload
    router.reload();
  }

  return (
    <div className="mt-5">
      <div className="w-auto border-b-2 border-b-blue border-dotted">
        <h1 className="text-blue font-bold">Problema Reportado</h1>
      </div>
      <div className="flex justify-center">
        <div className="mt-7 border p-5 max-w-[1024px] w-full">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Bloco</p>
              <p>{reportDetails.block}</p>
            </div>
            <div>
              <p className="font-bold">Casa</p>
              <p>{reportDetails.house}</p>
            </div>
            <div>
              <p className="font-bold">Cômodo</p>
              <p>{reportDetails.room}</p>
            </div>
            <div>
              <p className="font-bold">Descrição</p>
              <p>{reportDetails.description}</p>
            </div>
            <div>
              <p className="font-bold">Categoria</p>
              <p>{reportDetails.category}</p>
            </div>
            <div>
              <p className="font-bold">Imagem</p>
              <div>
                {reportDetails.image === '' ? (
                  <p>Sem foto</p>
                ) : (
                  <img
                    src={reportDetails.image}
                    alt="Foto do problema"
                    className="max-w-full h-auto"
                  />
                )}
              </div>
            </div>
            <div>
              <p className="font-bold">Status</p>
              <p>{reportDetails.status}</p>
            </div>
            <div>
              <p className="font-bold">Criado em</p>
              <p>{reportDetails.createdAt}</p>
            </div>
          </div>
          <div className="flex justify-end">
            {reportDetails.status === 'Concluído' ? (
              <button
                className="bg-green-600 text-white font-bold px-5 py-2 rounded-lg mt-5"
                disabled
              >
                Problema resolvido
              </button>
            ) : (
              <button
                onClick={updateStatus}
                className="bg-red-600 text-white font-bold px-5 py-2 rounded-lg mt-5 hover:bg-red-400"
              >
                Marcar como concluída
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const reportId = context.params.id;

  console.log(reportId);

  const docRef = doc(db, 'reports', reportId);

  const reportSnap = await getDoc(docRef);

  console.log(reportSnap.data());

  const reportDetails = {
    id: reportSnap.id,
    block: reportSnap.data().block,
    house: reportSnap.data().house,
    room: reportSnap.data().room,
    description: reportSnap.data().description,
    category: reportSnap.data().category,
    image: reportSnap.data().image,
    status: reportSnap.data().status,
    createdAt: reportSnap.data().createdAt.toDate().toLocaleDateString('pt-BR')
  };

  return {
    props: {
      reportDetails
    }
  };
};
