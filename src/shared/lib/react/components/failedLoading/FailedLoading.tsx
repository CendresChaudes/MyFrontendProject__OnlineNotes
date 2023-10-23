import { Result, Button, Typography } from 'antd';
import clsx from 'clsx';
import styles from './style.module.css';

const { Title, Text, Paragraph } = Typography;

type FailedLoadingProps = {
  refetchAttemptsCount: number;
  onClick: () => void;
  className?: string;
}

export function FailedLoading({ className, refetchAttemptsCount, onClick }: FailedLoadingProps) {
  return (
    <Result
      className={clsx(styles.result, className)}
      status="error"
      title={<Title className={styles.title} level={2}>Failed loading</Title>}
      subTitle={
        refetchAttemptsCount
          ? (
            <>
              <Paragraph className={styles.text}>Please press button to try loading games again or come back later.</Paragraph>
              <Paragraph className={styles.text}>You have {refetchAttemptsCount} attempts!</Paragraph>
            </>
          )
          : <Text className={styles.text}>You have no attempts! Please come back later.</Text>
      }
      extra={
        <Button
          type="primary"
          onClick={onClick}
          disabled={!refetchAttemptsCount}
        >
          Try Again
        </Button>
      }
    >
    </Result>
  );
}
