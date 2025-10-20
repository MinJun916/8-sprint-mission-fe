'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Input from '@/components/Input.jsx';
import brandLogo_lg from '/public/brandLogo_lg.svg';

import styles from '@/styles/pages/LoginPage.module.scss';
import Button from '@/components/Button.jsx';
import SocialLogin from '@/components/SocialLogin.jsx';
import AuthEntry from '@/components/AuthEntry.jsx';
import Modal from '@/components/Modal.jsx';

import { isEmailValid, isPasswordValid } from '@/lib/formValidator.js';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleBlur = (fieldName) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [fieldName]: true,
    }));
  };

  let modalType = 'passwordError';
  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const isFormValid = isEmailValid(form.email) && isPasswordValid(form.password);
    setIsValidForm(isFormValid);
  }, [form]);

  return (
    <div className={styles.loginPage}>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} type={modalType} />}
      <Image src={brandLogo_lg} alt="logoImg" width={396} height={132} />
      <div className={styles.formContainer}>
        <div className={styles.loginForm}>
          <div className={styles.form}>
            <div className={styles.formName}>이메일</div>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={touched.email && !isEmailValid(form.email)}
            />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>비밀번호</div>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              isError={touched.password && !isPasswordValid(form.password)}
            />
          </div>
          <Button
            className={styles.loginBtn}
            type="login"
            size="lg"
            bg="none"
            disabled={!isValidForm}
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
