import {Route, Routes } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './Navigation/AppBar';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import {Oval} from 'react-loader-spinner';
import Container from './Layout/Container';
import '../services/tostify';

const HomeView = React.lazy(() => import('../views/HomeView'));
const ContactsView = React.lazy(() => import('../views/ContactsView'));
const LoginView = React.lazy(() => import('../views/LoginView'));
const RegisterView = React.lazy(() => import('../views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar/>
        <Suspense
          fallback={
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Oval height={40}
              width={40}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2} />
            </div>}>
            <Routes>
            <Route path="/" component={<HomeView />} />
            <Route
              path="/login"
              element={
                <PublicRoute
                  path="/login"
                  redirectTo="/contacts"
                  restricted
                  component={<LoginView />}/>}
                  />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  restricted
                  component={<RegisterView />}
                />}
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsView />}
                  redirectTo="/login"
                />}
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}