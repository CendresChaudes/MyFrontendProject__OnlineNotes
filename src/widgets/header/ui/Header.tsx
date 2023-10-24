import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import styles from './styles.module.scss';
import { AppRoute } from '@/const';

export function Header() {
  const currentBreakpoint = useBreakpoint();
  const isXsMobileBreakpoint = currentBreakpoint === 'XS';
  const isSmMobileBreakpoint = currentBreakpoint === 'SM';

  const shortLogoUrl = 'img/logo-short.svg';
  const fullLogoUrl = 'img/logo-full.svg';

  return (
    <Layout.Header className={styles.header}>
      <Row justify="center">
        <Col className={styles.col} span={8}>
          <Link className={styles.link} to={AppRoute.Root}>
            <Logo
              path={isXsMobileBreakpoint ? shortLogoUrl : fullLogoUrl}
              width={isXsMobileBreakpoint ? 40 : isSmMobileBreakpoint ? 175 : 265}
              height={isXsMobileBreakpoint ? 40 : isSmMobileBreakpoint ? 45 : 65}
              alt='Логотип сервиса "Online Notes".'
            />
          </Link>
        </Col>
      </Row>
    </Layout.Header>
  );
}
