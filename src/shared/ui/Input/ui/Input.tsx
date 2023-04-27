import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

// Забрал свойства, за исключением value и onChange, их ниже указал
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string,
	value?: string;
	onChange?: (value: string) => void;
	focus?: boolean,
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    type = 'text',
    placeholder = '',
    focus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (focus) {
      timerId = setTimeout(() => {
        ref.current.focus();
      }, 0);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [focus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      ref={ref}
      className={classNames(cls.Input, {}, [className])}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
});
