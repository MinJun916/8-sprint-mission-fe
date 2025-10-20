'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStatus } from '@/hooks/useAuth.jsx';
import Image from 'next/image';
import clsx from 'clsx';
import Button from '@/components/Button.jsx';
import styles from '@/styles/components/Header.module.scss';
import ic_profile from '/public/icons/ic_profile.svg';

import brandLogo from '/public/brandLogo.svg';

const Header = () => {
  const pathname = usePathname();
  const { data: auth, isLoading } = useAuthStatus();

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image src={brandLogo} alt="brandLogo" />
        </Link>
        <div className={styles.link}>
          <Link
            href="/article"
            className={clsx(styles.linkContent, pathname.startsWith('/article') && styles.active)}
          >
            자유게시판
          </Link>
          <Link
            href="/items"
            className={clsx(styles.linkContent, pathname.startsWith('/items') && styles.active)}
          >
            중고마켓
          </Link>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : auth?.isAuthenticated ? (
        <div className={styles.profile}>
          <Image src={ic_profile} alt="ic_profile" width={40} height={40} />
          <div className={styles.nickname}>{auth?.user?.data?.nickname}</div>
        </div>
      ) : (
        <Link href="/signin" className={styles.linkTag}>
          <Button type="login" />
        </Link>
      )}
    </div>
  );
};

export default Header;
