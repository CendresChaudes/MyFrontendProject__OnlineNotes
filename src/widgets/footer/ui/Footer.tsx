import { Layout, Typography } from 'antd';
import styles from './styles.module.scss';

const { Paragraph, Link } = Typography;

export function Footer() {
  return (
    <Layout.Footer className={styles.footer}>
      <Paragraph className={styles.text}>
        Designed by{' '}
        <Link href="https://github.com/CendresChaudes" target="_blank">
          CendresChaudes
        </Link>
      </Paragraph>
    </Layout.Footer>
  );
}
