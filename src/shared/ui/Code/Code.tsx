import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button';
import CopyIcn from 'shared/assets/icons/copyIcn.svg';
import cls from './Code.module.scss';

interface CodeProps {
	className?: string,
	text: string;
}

export const Code = (props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcn className={cls.copyIcn} />
      </Button>

      <code>
        {text}
      </code>
    </pre>
  );
};
