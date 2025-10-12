'use client';

import { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/Input';
import brandLogo_lg from '/public/brandLogo_lg.svg';

import styles from '@/styles/pages/LoginPage.module.scss';
import Button from '@/components/Button';
import SocialLogin from '@/components/SocialLogin.jsx';
import AuthEntry from '@/components/AuthEntry';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className={styles.loginPage}>
      <Image src={brandLogo_lg} alt="logoImg" width={396} height={132} />
      <div className={styles.formContainer}>
        <div className={styles.loginForm}>
          <div className={styles.form}>
            <div className={styles.formName}>이메일</div>
            <Input type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>비밀번호</div>
            <Input type="password" name="password" value={form.password} onChange={handleChange} />
          </div>
          <Button
            className={styles.loginBtn}
            type="login"
            size="lg"
            bg="none"
            disabled={true}
            onClick={handleSubmit}
          />
        </div>
        <SocialLogin />
        <AuthEntry type="signup" />
      </div>
    </div>
  );
};

export default LoginPage;
