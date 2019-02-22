import React from 'react';
import PropTypes from 'prop-types';

const Link = ({url, title}) => (
  <a href={url}>{title}</a>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Link;
