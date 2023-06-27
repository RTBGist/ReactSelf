import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
  value: string,
  content: string
}

interface SelectProps {
	className?: string,
	label?: string,
  options?: SelectOption[],
  selectedValue?: string,
  onChange?: (value: string) => void,
  readonly?: boolean,
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    selectedValue,
    onChange,
    readonly,
  } = props;

  const optionList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && (
      <span className={cls.label}>{label}</span>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={selectedValue}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
