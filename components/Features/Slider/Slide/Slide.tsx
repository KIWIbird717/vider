import { SlideProps } from './Slide.props';

// import styles from './Slide.module.scss';
export const Slide = ({ ...props }: SlideProps): JSX.Element => {
  // const {} = styles;

  return <div {...props}></div>;
};
