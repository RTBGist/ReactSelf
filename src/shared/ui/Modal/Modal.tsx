import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string,
	children?: ReactNode,
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler} onKeyDown={closeHandler} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
