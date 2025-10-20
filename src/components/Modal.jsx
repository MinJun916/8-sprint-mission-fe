import Button from '@/components/Button.jsx';
import styles from '@/styles/components/Modal.module.scss';

const Modal = ({ type = 'passwordError', setIsModalOpen = () => {} }) => {
  const typeMap = {
    passwordError: '비밀번호가 일치하지 않습니다.',
    emailError: '사용 중인 이메일입니다.',
    signupComplete: '가입 완료되었습니다.',
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>{typeMap[type]}</div>
        <Button type="confirm" size="modal" onClick={handleClose} />
      </div>
    </div>
  );
};

export default Modal;
