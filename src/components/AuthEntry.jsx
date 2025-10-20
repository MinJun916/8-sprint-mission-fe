import Link from 'next/link';
import styles from '@/styles/components/AuthEntry.module.scss';

/*
  type: signup | login
*/
const AuthEntry = ({ type = 'signup' }) => {
  const linkMap = {
    signup: '/signup',
    login: '/signin',
  };

  const textMap = {
    signup: '판다마켓이 처음이신가요?',
    login: '이미 회원이신가요?',
  };

  const btnMap = {
    signup: '회원가입',
    login: '로그인',
  };

  return (
    <div className={styles.entry}>
      <div className={styles.text}>{textMap[type]}</div>
      <Link href={linkMap[type]} className={styles.btn}>
        {btnMap[type]}
      </Link>
    </div>
  );
};

export default AuthEntry;
