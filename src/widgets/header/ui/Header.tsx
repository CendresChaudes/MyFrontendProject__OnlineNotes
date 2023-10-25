import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import { getLogoHeight } from '../lib/getLogoHeight';
import { getLogoWidth } from '../lib/getLogoWidth';
import styles from './styles.module.scss';
import { AppRoute } from '@/const';

export function Header() {
  const currentBreakpoint = useBreakpoint();
  const isXsMobileBreakpoint = currentBreakpoint === 'XS';

  const shortLogoUrl = 'img/logo-short.svg';
  const fullLogoUrl = 'img/logo-full.svg';

  return (
    <Layout.Header className={styles.header}>
      <Row justify="center">
        <Col className={styles.col} span={8}>
          <Link className={styles.link} to={AppRoute.Root}>
            <Logo
              path={isXsMobileBreakpoint ? shortLogoUrl : fullLogoUrl}
              width={getLogoWidth(currentBreakpoint)}
              height={getLogoHeight(currentBreakpoint)}
              alt="Логотип сервиса 'Online Notes'."
            />
          </Link>
        </Col>
      </Row>
    </Layout.Header>
  );
}
