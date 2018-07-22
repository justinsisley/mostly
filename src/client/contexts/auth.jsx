import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// Create a new context
const AuthContext = React.createContext();

// Export the Consumer component
export const AuthConsumer = AuthContext.Consumer;

// Create and export a Provider component
export class AuthProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  // Manage state like any other React Component
  state = {
    loggedIn: false,
    username: '',
  };

  logIn = (username) => {
    this.setState({
      loggedIn: true,
      username,
    });
  };

  logOut = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    const { children } = this.props;

    return (
      <AuthContext.Provider
        // Determine which data/methods will be provided to the Consumer
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

// Higher-order component to require authenticated user
export function withAuth(Component) {
  return function LoggedInComponent(props) {
    return (
      <AuthConsumer>
        {auth => (auth.loggedIn ? <Component {...props} /> : <Redirect to="/login" />)
        }
      </AuthConsumer>
    );
  };
}

// Higher-order component to require unauthenticated user
export function withoutAuth(Component) {
  return function LoggedOutComponent(props) {
    return (
      <AuthConsumer>
        {auth => (auth.loggedIn
          ? <Redirect to="/dashboard" />
          : <Component {...props} />)
        }
      </AuthConsumer>
    );
  };
}
