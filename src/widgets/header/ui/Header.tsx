import { ApiFilled, LoadingOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Typography, Flex } from 'antd';
import { signOut, signOutStatusObjectSelector } from '@/entities/user';
import { isMobile, useAppDispatch, useAppSelector, useBreakpoint } from '@/shared/lib';
import { Loader, Logo } from '@/shared/ui';
import { getLogoWidth } from '../lib/getLogoWidth';
import styles from './styles.module.scss';

const { Text, Link } = Typography;

export function Header() {
  const dispatch = useAppDispatch();
  const currentBreakpoint = useBreakpoint();
  const signOutStatus = useAppSelector(signOutStatusObjectSelector);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const isXsMobileBreakpoint = currentBreakpoint === 'XS';
  const shortLogoUrl = 'img/logo-short.svg';
  const fullLogoUrl = 'img/logo-full.svg';

  return (
    <Layout.Header className={styles.header}>
      <Row justify="center">
        <Col className={styles.col} span={8}></Col>
        <Col className={styles.logo} span={8}>
          <Logo
            path={isXsMobileBreakpoint ? shortLogoUrl : fullLogoUrl}
            width={getLogoWidth(currentBreakpoint)}
            height={60}
            alt="Логотип сервиса 'Online Notes'."
          />
        </Col>
        <Col className={styles['sign-out']} span={8}>
          <Link className={styles.link} onClick={handleSignOut}>
            {signOutStatus.isPending ? (
              <Loader
                indicator={<LoadingOutlined className={styles.loader} />}
              />
            ) : (
              <Flex gap="small">
                {isMobile(currentBreakpoint) || <Text className={styles.text}>Выйти</Text>}
                <ApiFilled className={styles.icon} />
              </Flex>
            )}
          </Link>
        </Col>
      </Row>
    </Layout.Header>
  );
}
