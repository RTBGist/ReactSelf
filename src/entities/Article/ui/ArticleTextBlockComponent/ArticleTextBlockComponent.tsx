import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block.title && (
      <Text title={block.title} className={cls.text} />
      )}

      {!!block.paragraphs && block.paragraphs.map((text) => (
        <Text text={text} key={text} className={cls.text} />
      ))}
    </div>
  );
});
