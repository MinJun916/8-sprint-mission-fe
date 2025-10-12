import styles from '@/styles/components/Input.module.scss';

const Input = ({ type = 'title', name = '', value = '', onChange = () => {} }) => {
  const placeholderMap = {
    title: '제목을 입력해주세요',
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
  };

  const inputTypeMap = {
    title: 'text',
    email: 'email',
    password: 'password',
  };

  const handleChange = (e) => {
    const nextValue = e.target.value;
    onChange(name, nextValue);
  };

  return (
    <input
      className={styles.input}
      name={name}
      type={inputTypeMap[type]}
      placeholder={placeholderMap[type]}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
