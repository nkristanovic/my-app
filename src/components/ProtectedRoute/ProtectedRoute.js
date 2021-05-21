import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Admin,  isLoggedIn,  isAdmin,  ...rest }) => {
  return (
    <Route {...rest} render={
      (props) => {
            return isAdmin ? <Admin isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
            : <Redirect to={
                {
                    path:'/',
                    state: {
                        from: props.location
                    }
                }
            } />
        }
      }
     />
  )
}

export default ProtectedRoute;