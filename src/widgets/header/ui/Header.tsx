import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useBreakpoint, isMobile } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import styles from './styles.module.scss';
import { AppRoute } from '@/const';

export function Header() {
  const currentBreakpoint = useBreakpoint();
  const isMobileBreakpoint = isMobile(currentBreakpoint);

  const shortLogoUrl = 'img/logo-short.svg';
  const fullLogoUrl = 'img/logo-full.svg';

  return (
    <Layout.Header className={styles.header}>
      <Row justify="center">
        <Col className={styles.col} span={8}>
          <Link className={styles.link} to={AppRoute.Root}>
            <Logo
              path={isMobileBreakpoint ? shortLogoUrl : fullLogoUrl}
              width={isMobileBreakpoint ? 40 : 230}
              height={isMobileBreakpoint ? 40 : 60}
            />
          </Link>
        </Col>
      </Row>
    </Layout.Header>
  );
}
