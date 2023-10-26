import { notification } from 'antd';
import { useEffect } from 'react';
import { useAppSelector } from '../../react';
import { showNotification } from '../lib/showNotification';
import { notificationTypeSelector } from '../model/selectors';

export function Notification() {
  const notificationItem = useAppSelector(notificationTypeSelector);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (notificationItem) {
      showNotification(api, notificationItem);
    }
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{contextHolder}</>;
}
