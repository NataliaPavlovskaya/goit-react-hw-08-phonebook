import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Routes>
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={redirectTo} />
        )
      }
    />
    </Routes>
  );
}