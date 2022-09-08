import propTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ children, title }) {
  return (
    <section className={styles.section}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string,
};