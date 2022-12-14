import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../components/Layout/Section';
import authOperations from '../redux/auth/auth-operations';

export default function LoginViews() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Section title="Вхід до облікового запису">
      <div className="wrapper">
        <form className="form">
          <div className="inputWrapper">
            <label className="label" htmlFor="email"></label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className="inputWrapper">
            <label className="label" htmlFor="password"></label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              value={password}
              minLength="7"
              placeholder="пароль"
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>
          <button
            className="button"
            type="submit"
            onClick={e => handleSubmit(e)}>
            Увійти
          </button>
        </form>
      </div>
    </Section>
  );
}