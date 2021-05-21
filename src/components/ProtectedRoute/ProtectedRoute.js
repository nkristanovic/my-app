import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const ProtectedRoute = ({ component: Admin, ...rest }) => {
  const { isAdmin } = useContext(AuthContext);
  
  return (
    <Route {...rest} render={
      (props) => {
            return isAdmin ? <Admin isAdmin={isAdmin}/>
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