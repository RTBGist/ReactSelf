import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eyeIcon.svg';
import CalendarIcon from 'shared/assets/icons/calendarIcon.svg';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string,
  id: string,
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock, idx) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи.')}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            src={article?.img}
            size={200}
            alt={t('Аватар')}
          />
        </div>
        <Text
          size={TextSize.L}
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>

        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
