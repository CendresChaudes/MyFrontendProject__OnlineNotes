import clsx from 'clsx';
import styles from './styles.module.css';

type LogoProps = {
  className?: string;
  path?: string;
  alt?: string;
}

export function Logo({ className, path, alt }: LogoProps) {
  return (
    <img
      className={clsx(styles.logo, className)}
      src={path || 'img/logo.svg'}
      alt={alt || 'Logo.'}
    />
  );
}
