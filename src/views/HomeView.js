import { NavLink } from 'react-router-dom';
import Section from '../components/Layout/Section';
import Container from '../components/Layout/Container';
import styles from './HomeView.module.css';

export default function HomeView() {
  return (
    <Container>
      <Section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Ласкаво просимо!</h1>
          <NavLink className={styles.link} to="/register"/>
          <p className={styles.description}>
          Додаток для запису та зберігання телефонних номерів ваших друзів
          </p>
        </div>
      </Section>
    </Container>
  );
}