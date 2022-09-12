import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../Navigation/AppBar'
import Container from './Container'

export const Layout = () => {
  return (
    <Container>
      <AppBar />
        <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};