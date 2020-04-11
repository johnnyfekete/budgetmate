/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route as ReactRoute, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Route = ({ guarded, guest, fallback, ...props }) => {
  if (!guarded && !guest) {
    return <ReactRoute {...props} />;
  }

  const authenticated = useSelector(state => state.auth.authenticated);

  if ((guarded && !authenticated) || (guest && authenticated)) {
    return <Redirect to={fallback} />;
  }

  return <ReactRoute {...props} />;
};

Route.propTypes = {
  guarded: PropTypes.bool,
  guest: PropTypes.bool,
  fallback: PropTypes.string,
};

Route.defaultProps = {
  guarded: false,
  guest: false,
  fallback: '/login',
};

export default Route;
