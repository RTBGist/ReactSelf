import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={classNames(cls.loginRow)}>
        <Input
          placeholder={t('Введите логин')}
          autofocus
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
