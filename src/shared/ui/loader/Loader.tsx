import { Spin } from 'antd';
import clsx from 'clsx';
import styles from './styles.module.scss';

type LoaderProps = {
  text?: string;
  fullPage?: boolean;
};

export function Loader({ text, fullPage = true }: LoaderProps) {
  return (
    <div
      className={clsx(styles.wrapper, { [styles['full-page']]: fullPage })}
      data-testid="loader"
    >
      <Spin />

      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
