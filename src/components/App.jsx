import {Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import '../services/tostify';
import { Suspense } from 'react';
import {Oval} from 'react-loader-spinner';

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
    <Route path="/" element={<Layout />}>
      <Route index element={<PublicRoute component={<HomeView />} />} />
      <Route
        path="/register"
        element={
          <PublicRoute
            restricted
            redirectTo="/contacts"
            component={<RegisterView />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute
            restricted
            redirectTo="/contacts"
            component={<LoginView />}
          />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsView />} />
        }
      />
    </Route>
  </Routes>
  </Suspense>
            
  );
}
