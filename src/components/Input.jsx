import styles from '@/styles/components/Input.module.scss';
import Image from 'next/image';
import ic_eye from '/public/icons/ic_eye.svg';
import clsx from 'clsx';

const Input = ({
  type = 'title',
  name = '',
  value = '',
  onChange = () => {},
  onBlur = () => {},
  isVisible = false,
  setIsVisible = () => {},
  isError = false,
}) => {
  const placeholderMap = {
    title: '제목을 입력해주세요',
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    nickname: '닉네임을 입력해주세요',
    passwordCheck: '비밀번호를 다시 한 번 입력해주세요',
  };

  const inputTypeMap = {
    title: 'text',
    email: 'email',
    password: 'password',
    nickname: 'text',
    passwordCheck: 'password',
  };

  const handleChange = (e) => {
    const nextValue = e.target.value;
    onChange(name, nextValue);
  };

  const handleBlur = () => {
    onBlur(name);
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <input
          className={clsx(styles.input, { [styles.isError]: isError })}
          name={name}
          type={isVisible ? 'text' : inputTypeMap[type]}
          placeholder={placeholderMap[type]}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {type === 'password' && (
          <button className={styles.eyeIcon} onClick={() => setIsVisible(!isVisible)}>
            <Image src={ic_eye} alt="ic_eye" width={24} height={24} />
          </button>
        )}
        {type === 'passwordCheck' && (
          <button className={styles.eyeIcon} onClick={() => setIsVisible(!isVisible)}>
            <Image src={ic_eye} alt="ic_eye" width={24} height={24} />
          </button>
        )}
      </div>

      {isError && type === 'email' && (
        <div className={styles.errorMessage}>잘못된 이메일입니다</div>
      )}
      {isError && type === 'password' && (
        <div className={styles.errorMessage}>비밀번호를 8자 이상 입력해주세요</div>
      )}
      {isError && type === 'passwordCheck' && (
        <div className={styles.errorMessage}>비밀번호가 일치하지 않습니다</div>
      )}
    </div>
  );
};

export default Input;
