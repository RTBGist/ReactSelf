import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useEffect, useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	focus?: boolean;
	isOpen?: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
  const {
    className,
    focus,
    isOpen,
  } = props;

  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isOpen && focus) {
      setIsFocused(true);
    }

    return () => {
      setIsFocused(false);
    };
  }, [focus, isOpen]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={classNames(cls.loginRow)}>
        <Input
          placeholder={t('Введите логин')}
          focus={isFocused}
        />
      </div>
      <div className={classNames(cls.loginRow)}>
        <Input placeholder={t('Введите пароль')} type="password" />
      </div>
      <div className={classNames(cls.loginRow)}>
        <Button className={classNames(cls.loginBtn)}>{t('Войти')}</Button>
      </div>
    </div>
  );
};
