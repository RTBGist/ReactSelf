import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import SidebarItem from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
	className?: string,
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemList]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        type="button"
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.themeButton} />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
});
