import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
	className?: string,
}

// копонент для тестирования ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
  // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={onThrow} className={classNames('', {}, [className])}>
      throw error
    </Button>
  );
};
