import React from 'react';

import { DISPLAY_TYPE } from './DisplayTypes';
import { BUTTON_TYPE } from './ButtonTypes';
import Navbar from '../../components/navbar';

const getDisplayType = () => DISPLAY_TYPE.LOGO_AND_LINKS;
const getButtonType = () => BUTTON_TYPE.REGISTER;
export const NavbarContainer = () => (
  <Navbar
    displayType={getDisplayType()}
    buttonType={getButtonType()}
      />
);

export default NavbarContainer;
