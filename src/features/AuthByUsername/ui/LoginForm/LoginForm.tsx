import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
	focus?: boolean;
	isOpen?: boolean;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const {
    className,
    focus,
    isOpen,
  } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неправильный логин или пароль')} theme={TextTheme.ERROR} />}

      <div className={classNames(cls.loginRow)}>
        <Input
          placeholder={t('Введите логин')}
          focus={focus}
          modalIsOpen={isOpen}
          onChange={onChangeUserName}
          value={username}
        />
      </div>
      <div className={classNames(cls.loginRow)}>
        <Input
          placeholder={t('Введите пароль')}
          type="password"
          onChange={onChangePassword}
          value={password}
        />
      </div>
      <div className={classNames(cls.loginRow)}>
        <Button
          className={classNames(cls.loginBtn)}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </div>
  );
});
