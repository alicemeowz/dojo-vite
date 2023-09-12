import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'; // Assuming you're using a Firebase authentication hook

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(firebaseApp.auth()); // Get the current user from Firebase Authentication

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;