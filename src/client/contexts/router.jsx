import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Create a new context with no default state
const RouterContext = React.createContext();

// Export the Consumer component
export const RouterConsumer = RouterContext.Consumer;

// Create and export a Provider component
function Provider(props) {
  const { children, ...rest } = props;

  return (
    <RouterContext.Provider value={rest}>
      {children}
    </RouterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

// Wrap the Provider in the `withRouter` higher-order component
export const RouterProvider = withRouter(Provider);
