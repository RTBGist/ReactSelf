import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void,
	focus?: boolean,
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    focus,
  } = props;

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm focus={focus} isOpen={isOpen} />
    </Modal>
  );
};
