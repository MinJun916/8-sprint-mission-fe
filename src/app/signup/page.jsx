'use client';

import Image from 'next/image';
import SocialLogin from '@/components/SocialLogin.jsx';
import AuthEntry from '@/components/AuthEntry.jsx';
import brandLogo_lg from '/public/brandLogo_lg.svg';

import styles from '@/styles/pages/SignupPage.module.scss';
import Input from '@/components/Input';
import Button from '@/components/Button';

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <Image src={brandLogo_lg} alt="logoImg" width={396} height={132} />
      <div className={styles.formContainer}>
        <div className={styles.signupForm}>
          <div className={styles.form}>
            <div className={styles.formName}>이메일</div>
            <Input />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>닉네임</div>
            <Input />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>비밀번호</div>
            <Input />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>비밀번호 확인</div>
            <Input />
          </div>
          <Button type="signup" size="lg" bg="none" disabled={true} />
        </div>
        <SocialLogin />
        <AuthEntry type="login" />
      </div>
    </div>
  );
};

export default SignupPage;
