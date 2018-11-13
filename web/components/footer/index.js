import React from 'react';
import PropTypes from 'prop-types';
import { EXTERNAL } from '../home/External';

import leftScenery from '../../assets/footer/scenery/left-scenery.svg';
import bike from '../../assets/footer/scenery/bike.svg';
import bikeMobile from '../../assets/footer/scenery/bike-mobile.svg';
import rightScenery from '../../assets/footer/scenery/right-scenery.svg';
import rightSceneryMobile from '../../assets/footer/scenery/right-scenery-mobile.svg';
import rightSceneryLHD from '../../assets/footer/scenery/right-scenery-lhd.svg';
import rightSceneryLHDMobile from '../../assets/footer/scenery/right-scenery-lhd-mobile.svg';

import facebookIcon from '../../assets/footer/icons/facebook.svg';
import instagramIcon from '../../assets/footer/icons/instagram.svg';
import mediumIcon from '../../assets/footer/icons/medium.svg';
import twitterIcon from '../../assets/footer/icons/twitter.svg';

const social = {
  nwplus: [
    {
      alt: 'facebook',
      src: facebookIcon,
      href: EXTERNAL.FACEBOOK,
    },
    {
      alt: 'instagram',
      src: instagramIcon,
      href: EXTERNAL.INSTAGRAM,
    },
    {
      alt: 'medium',
      src: mediumIcon,
      href: EXTERNAL.MEDIUM,
    },
    {
      alt: 'twitter',
      src: twitterIcon,
      href: EXTERNAL.TWITTER,
    },
  ],
  lhd: [
    {
      alt: 'facebook',
      src: facebookIcon,
      href: EXTERNAL.LHD.FACEBOOK,
    },
    {
      alt: 'instagram',
      src: instagramIcon,
      href: EXTERNAL.LHD.INSTAGRAM,
    },
    {
      alt: 'twitter',
      src: twitterIcon,
      href: EXTERNAL.LHD.TWITTER,
    },
  ],
};
const links = {
  nwplus: [
    {
      href: EXTERNAL.EMAIL_US,
      text: 'E-mail Us',
    },
    {
      href: EXTERNAL.CODE_OF_CONDUCT,
      text: 'Code Of Conduct',
    },
    {
      href: EXTERNAL.SPONSORSHIP_PACKAGE,
      text: 'Become a Sponsor',
    },
  ],
  lhd: [
    {
      href: EXTERNAL.EMAIL_US,
      text: 'E-mail Us',
    },
    {
      href: EXTERNAL.CODE_OF_CONDUCT,
      text: 'Code Of Conduct',
    },
    {
      href: EXTERNAL.LHD.SPONSORSHIP_PACKAGE,
      text: 'Become a Sponsor',
    },
  ],
};

const getImage = (alt, src, className) => (
  <img
    className={className}
    alt={alt}
    src={src} />
);

const getIcon = icon => (
  <a href={icon.href}>
    {getImage(icon.alt, icon.src, icon.className)}
  </a>
);

const getLink = link => (
  <a href={link.href}>{link.text}</a>
);

const Footer = ({ type }) => (
  <footer className="footer fill-width">
    <div className="scale-scenery">
      {getImage('left-scenery', leftScenery, 'left-scenery')}
      {getImage('bike', bike, 'bike')}
      {getImage('bike-mobile', bikeMobile, 'bike-mobile')}
      {(type === 'lhd')
        ? getImage('right-scenery-lhd', rightSceneryLHD, 'right-scenery-lhd')
        : getImage('right-scenery', rightScenery, 'right-scenery')}
      {(type === 'lhd')
        ? getImage('right-scenery-lhd-mobile', rightSceneryLHDMobile, 'right-scenery-lhd-mobile')
        : getImage('right-scenery-mobile', rightSceneryMobile, 'right-scenery-mobile')}
    </div>
    <div className="footer-content">
      <div className="social flex dir-row jc-between">
        {social[type].map(icon => getIcon(icon))}
      </div>
      <div className="links flex jc-between pad-ends-l">
        {links[type].map(link => getLink(link))}
      </div>
      <div className="footnote pad-bot-l">
        <p>Organized and held by nwPlus
          <br />Copyright © 2018 nwHacks
        </p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  type: PropTypes.string,
};

export { Footer };
