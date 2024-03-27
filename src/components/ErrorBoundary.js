<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so the next render shows fallback UI
  static getDerivedStateFromError() {
    // You would typically use the error parameter to log the error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error and error information to an error reporting service
    // e.g., logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // Render children components in case of no error
    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(/* error, */ errorInfo) {
        console.error("Error boundary caught an error", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Sorry, something went wrong.</h2>;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
>>>>>>> 4d45f02 (Add controllers and middleware directories)
};

export default ErrorBoundary;
