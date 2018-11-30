import React from 'react';

// title
import ttt from '../../assets/local-hack-day/sponsors/ttt.png';
// monetary
import atp from '../../assets/local-hack-day/sponsors/atp.svg';
import nextbillion from '../../assets/local-hack-day/sponsors/nextbillion.svg';
import slack from '../../assets/local-hack-day/sponsors/slack.svg';
import ubc from '../../assets/local-hack-day/sponsors/ubc.png';
import innovators from '../../assets/local-hack-day/sponsors/innovators.png';
import mlh from '../../assets/local-hack-day/sponsors/mlh.svg';
import microsoft from '../../assets/local-hack-day/sponsors/microsoft.png';
import github from '../../assets/local-hack-day/sponsors/github.png';
import square from '../../assets/local-hack-day/sponsors/square.svg';
import sketch from '../../assets/local-hack-day/sponsors/sketch.svg';
import wolfram from '../../assets/local-hack-day/sponsors/wolfram.png';
// in-kind
import superhi from '../../assets/local-hack-day/sponsors/superhi.jpg';
import plux from '../../assets/local-hack-day/sponsors/plux.png';
import bitalino from '../../assets/local-hack-day/sponsors/bitalino.png';
import grounds from '../../assets/local-hack-day/sponsors/grounds.png';
import guayaki from '../../assets/local-hack-day/sponsors/guayaki.png';
import redbull from '../../assets/local-hack-day/sponsors/redbull.png';
import pacificPoke from '../../assets/local-hack-day/sponsors/PacificPoke.png';
import stormcrow from '../../assets/local-hack-day/sponsors/stormcrow.png';
import red from '../../assets/local-hack-day/sponsors/red.png';


const getSponsor = (alt, src, href, className) => (
  <a href={href}>
    <img
      alt={alt}
      src={src}
      className={`scale-on-hover ${className}`}
    />
  </a>
);

const Sponsors = () => (
  <div className="sponsors">
    <h2 className="margin-bottom-m">Sponsors</h2>
    {getSponsor('Two Tall Totems', ttt, 'https://www.twotalltotems.com/', 'title')}<br />
    {getSponsor('A Thinking Ape', atp, 'https://www.athinkingape.com/', 'monetary')}
    {getSponsor('NextBillion', nextbillion, 'https://www.nextbillion.org/', 'monetary')}<br />
    {getSponsor('Slack', slack, 'https://slack.com/', 'monetary')}
    {getSponsor('UBC', ubc, 'https://www.cs.ubc.ca/', 'monetary ubc')}
    {getSponsor('League of Innovators', innovators, 'https://www.theleagueofinnovators.com/', 'monetary')}<br />
    {getSponsor('MLH', mlh, 'https://mlh.io/', 'monetary')}
    {getSponsor('Microsoft', microsoft, 'https://www.microsoft.com/', 'monetary')}
    {getSponsor('GitHub', github, 'https://www.github.com/', 'monetary')}<br />
    {getSponsor('Square', square, 'https://squareup.com/', 'monetary')}
    {getSponsor('Sketch', sketch, 'https://www.sketchapp.com/', 'monetary')}
    {getSponsor('Wolfram Language', wolfram, 'https://www.wolframalpha.com/', 'monetary')}<br />
    {getSponsor('SuperHi', superhi, 'https://www.superhi.com/', 'in-kind')}
    {getSponsor('PLUX', plux, 'https://www.plux.info/', 'in-kind')}
    {getSponsor('Bitalino', bitalino, 'http://bitalino.com/en/', 'in-kind')}
    {getSponsor('Grounds For Coffee', grounds, 'https://groundsforcoffee.ca/locations/', 'in-kind')}<br />
    {getSponsor('Guayaki Yerba Mate', guayaki, 'https://guayaki.com/', 'in-kind')}
    {getSponsor('Red Bull', redbull, 'https://www.redbull.com/', 'in-kind')}
    {getSponsor('Pacific Poke', pacificPoke, 'https://www.thepacificpoke.com/', 'in-kind')}
    {getSponsor('Storm Crow', stormcrow, 'https://www.stormcrowalehouse.com/', 'in-kind')}
    {getSponsor('Red Academy', red, 'https://redacademy.com/', 'in-kind')}

  </div>
);

export { Sponsors };
