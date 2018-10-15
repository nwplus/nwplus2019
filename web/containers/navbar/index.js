import React from 'react';
import PropTypes from 'prop-types';

import { DISPLAY_TYPE } from './DisplayTypes';
import { BUTTON_TYPE } from './ButtonTypes';
import Navbar from '../../components/navbar';

const getDisplayType = () => {
  // Should only display logo for nwPlus static websites
  return DISPLAY_TYPE.ONLY_LOGO;
};

const getButtonType = () => {
  // Should be no button for nwPlus static websites
  return BUTTON_TYPE.NONE;
};

export const NavbarContainer = () => {
  return (
    <Navbar
      displayType={getDisplayType()}
      buttonType={getButtonType()}
      />
  );
};

NavbarContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NavbarContainer;
