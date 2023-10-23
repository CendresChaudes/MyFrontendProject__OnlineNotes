import { Result, Typography } from 'antd';
import styles from './styles.module.css';

const { Title, Text } = Typography;

export function AppCrashPage() {
  return (
    <Result
      className={styles.result}
      status="error"
      title={<Title className={styles.title} level={1}>App Crash</Title>}
      subTitle={<Text className={styles.text}>Something&apos;s wrong. Please come back later!</Text>}
    >
    </Result>
  );
}
