import styles from '@/styles/components/Input.module.scss';
import Image from 'next/image';
import ic_eye from '/public/icons/ic_eye.svg';

const Input = ({
  type = 'title',
  name = '',
  value = '',
  onChange = () => {},
  onBlur = () => {},
  isVisible = false,
  setIsVisible = () => {},
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
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
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
  );
};

export default Input;
