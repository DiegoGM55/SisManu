import styles from '@/styles/components/message/Message.module.css';
import { useEffect, useState } from 'react';

interface MessageProps {
  type: 'success' | 'error';
  message: string;
}

const Message = ({ type, message }: MessageProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!message) return;
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      {show && (
        <div className={`${styles.message} ${styles[type]}`}>{message}</div>
      )}
    </>
  );
};

export default Message;
