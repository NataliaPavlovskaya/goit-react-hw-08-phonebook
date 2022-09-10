import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';



export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}){
  const isAuthenticated = useSelector(getIsAuthenticated);

  const shouldRedirect = isAuthenticated && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}



// export default function PublicRoute({
//   component: Component,
//   redirectTo,
//   ...routeProps
// }) {
//   const isAuthenticated = useSelector(getIsAuthenticated);

//   return (
//     <Routes>
//     <Route
//       {...routeProps}
//       render={props =>
//         isAuthenticated && routeProps.restricted ? (
//           <Navigate to={redirectTo} />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//     </Routes>
//   );
// }