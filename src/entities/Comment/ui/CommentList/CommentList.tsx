import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
	className?: string,
  comments?: Comment[],
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { t } = useTranslation();
  const { className, comments, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentList, {}, [])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
};
