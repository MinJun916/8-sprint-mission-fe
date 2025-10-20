'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SocialLogin from '@/components/SocialLogin.jsx';
import AuthEntry from '@/components/AuthEntry.jsx';
import Input from '@/components/Input';
import Button from '@/components/Button';
import brandLogo_lg from '/public/brandLogo_lg.svg';

import {
  isEmailValid,
  isPasswordValid,
  isPasswordCheckValid,
  isNicknameValid,
} from '@/lib/formValidator.js';

import styles from '@/styles/pages/SignupPage.module.scss';

const SignupPage = () => {
  const [form, setForm] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const [isValidForm, setIsValidForm] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    nickname: false,
    password: false,
    passwordCheck: false,
  });

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

  useEffect(() => {
    const { email, nickname, password, passwordCheck } = form;
    const isFormValid =
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isNicknameValid(nickname) &&
      isPasswordCheckValid(password, passwordCheck);
    setIsValidForm(isFormValid);
  }, [form]);

  return (
    <div className={styles.signupPage}>
      <Image src={brandLogo_lg} alt="logoImg" width={396} height={132} />
      <div className={styles.formContainer}>
        <div className={styles.signupForm}>
          <div className={styles.form}>
            <div className={styles.formName}>이메일</div>
            <Input
              type="email"
              value={form.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={touched.email && !isEmailValid(form.email)}
            />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>닉네임</div>
            <Input
              type="nickname"
              value={form.nickname}
              name="nickname"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={touched.nickname && !isNicknameValid(form.nickname)}
            />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>비밀번호</div>
            <Input
              type="password"
              value={form.password}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={touched.password && !isPasswordValid(form.password)}
              isVisible={isPasswordVisible}
              setIsVisible={setIsPasswordVisible}
            />
          </div>
          <div className={styles.form}>
            <div className={styles.formName}>비밀번호 확인</div>
            <Input
              type="passwordCheck"
              value={form.passwordCheck}
              name="passwordCheck"
              onChange={handleChange}
              onBlur={handleBlur}
              isVisible={isPasswordCheckVisible}
              setIsVisible={setIsPasswordCheckVisible}
              isError={
                touched.passwordCheck && !isPasswordCheckValid(form.password, form.passwordCheck)
              }
            />
          </div>
          <Button type="signup" size="lg" bg="none" disabled={!isValidForm} />
        </div>
        <SocialLogin />
        <AuthEntry type="login" />
      </div>
    </div>
  );
};

export default SignupPage;
