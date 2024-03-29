import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType,
  collapsed: boolean,
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation();
  const {
    item,
    collapsed,
  } = props;
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});

export default SidebarItem;
