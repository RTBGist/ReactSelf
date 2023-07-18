import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.articlesPage, {}, [])} />
  );
};

export default memo(ArticlesPage);
