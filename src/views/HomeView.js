import { NavLink } from 'react-router-dom';
import Section from '../components/Layout/Section';
import Container from '../components/Layout/Container';
import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <Container>
      <Section className={s.section}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Добро пожаловать!</h1>
          <NavLink className={s.link} to="/register"/>
          <p className={s.description}>
            Приложение для записи и хранения телефонных номеров ваших друзей
          </p>
        </div>
      </Section>
    </Container>
  );
}