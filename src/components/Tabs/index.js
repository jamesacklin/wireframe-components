import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '../Button';

export default function Tabs({ tabs }) {
  return (
    <div>
      {tabs}
      <Button />
      <Button />
      <Button />
    </div>
  );
}

Tabs.defaultProps = {
  tabs: '',
};

Tabs.propTypes = {
  tabs: PropTypes.string,
};
