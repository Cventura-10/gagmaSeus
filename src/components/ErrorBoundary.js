import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  // Initialize state with hasError flag set to false
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so that the next render will show the fallback UI
  static getDerivedStateFromError(error) {
    // Return new state
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error and error information to an error reporting service
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

// PropTypes validation for children
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
