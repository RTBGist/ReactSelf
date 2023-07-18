import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
	className?: string,
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleimageblockcomponent, {}, [className])}>
      <img src={block?.src} className={cls.img} alt={block?.title} />
      {block.title && (
        <Text title={block?.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
