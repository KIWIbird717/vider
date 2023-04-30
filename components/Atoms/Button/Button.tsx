import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

export const Button = ({ primary, children, ...props }: ButtonProps): JSX.Element => {
  const clicked = (e) => {
    console.log(e);
  };

  return (
    <button className={`${styles.button} ${primary ? styles.primary : ''}`} onClick={clicked} {...props}>
      <span>{children}</span>
    </button>
  );
};
