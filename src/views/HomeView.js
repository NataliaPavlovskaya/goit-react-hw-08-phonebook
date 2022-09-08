import { NavLink } from 'react-router-dom';
import Section from '../components/Layout/Section';
import Container from '../components/Layout/Container';
import styles from './HomeView.module.css';

export default function HomeView() {
  return (
    <Container>
      <Section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Добро пожаловать!</h1>
          <NavLink className={styles.link} to="/register"/>
          <p className={styles.description}>
            Приложение для записи и хранения телефонных номеров ваших друзей
          </p>
        </div>
      </Section>
    </Container>
  );
}