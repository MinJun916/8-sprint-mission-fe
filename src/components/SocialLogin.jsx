import Image from 'next/image';
import ic_google from '/public/icons/ic_social/ic_google.svg';
import ic_kakao from '/public/icons/ic_social/ic_kakao.svg';

import styles from '@/styles/components/SocialLogin.module.scss';

const SocialLogin = () => {
  return (
    <div className={styles.socialLogin}>
      <div className={styles.socialLoginTitle}>간편 로그인하기</div>
      <div className={styles.socialLoginBtns}>
        <Image src={ic_google} alt="ic_google" width={42} height={42} />
        <Image src={ic_kakao} alt="ic_kakao" width={42} height={42} />
      </div>
    </div>
  );
};

export default SocialLogin;
