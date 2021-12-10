import { Redirect, Route } from 'react-router-dom';
import { getCurrentAddress } from './common';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return getCurrentAddress() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
export default PrivateRoute;
