import { Button, Result, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useBreakpoint, isMobile } from '@/shared/lib';
import styles from './styles.module.scss';
import { AppRoute } from '@/const';

const { Title, Text } = Typography;

export function NotFoundPage() {
  const currentBreakpoint = useBreakpoint();

  return (
    <Result
      className={styles.result}
      status="404"
      title={<Title className={styles.title} level={1}>Error 404</Title>}
      subTitle={<Text className={styles.text}>Sorry, the page you visited does not exist.</Text>}
      extra={
        <Button
          type="primary"
          shape="round"
          size={isMobile(currentBreakpoint) ? 'large' : 'middle'}
        >
          <Link to={AppRoute.Root}>Back Home</Link>
        </Button>
      }
    />
  );
}
