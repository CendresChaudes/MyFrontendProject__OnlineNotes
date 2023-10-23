import clsx from 'clsx';
import styles from './styles.module.css';

type LogoProps = {
  className: string;
  path?: string;
}

export function Logo({ className, path }: LogoProps) {
  return (
    <img
      className={clsx(styles.logo, className)}
      src={path || 'img/logo.svg'}
      alt="Logo."
    />
  );
}
