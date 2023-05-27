import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} focus={focus} isOpen={isOpen} />
      </Suspense>
    </Modal>
  );
};
