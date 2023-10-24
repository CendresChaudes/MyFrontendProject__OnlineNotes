import clsx from 'clsx';
import styles from './styles.module.scss';

type LoaderProps = {
  text?: string;
  color?: 'blue';
  fullPage?: boolean;
}

export function Loader({ text = 'Loading...', color = 'blue', fullPage = true }: LoaderProps) {
  return (
    <div
      className={clsx(styles.wrapper, { [styles['full-page']]: fullPage })}
      data-testid='loader'
    >
      <div className={clsx(styles.loader, { [styles[`loader--${color}`]]: color })}>
      </div>

      {text && (
        <p className={styles.text}>{text}</p>
      )}
    </div>
  );
}
