/* eslint-disable */
import React from 'react';
import logo from '../../assets/logo.svg';
import imgLeft from '../../assets/illustration-hero-left.svg';
import imgRight from '../../assets/illustration-hero-right.svg';
import Squiggle from '../../assets/bg-hero-squiggle.svg';
import iconScroll from '../../assets/icon-scroll.svg';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-top">
        <img src={logo} alt="logo" className="header-logo" />
      </div>
      <div className="header-bottom">
        <div className="left-img">
          <img src={imgLeft} alt="imgLeft" className="imgLeft" />
        </div>
        <div className="middle-container">
          <img src={Squiggle} alt="Squiggle" className="Squiggle" />
          <div className="middle-container-wrapper">
            <h1 className="middle-container-title">
              Get paid for the work you <strong>love</strong> to do.
            </h1>
            <span className="middle-container-subtitle">
              The 9-5 grind is so last century. We believe in living life on
              your own terms. Whether you’re looking to escape the rat race or
              set up a side hustle, we’ve got you covered.
            </span>
            <img
              src={iconScroll}
              alt="iconScroll"
              className="middle-container-img"
            />
          </div>
        </div>
        <div className="right-img">
          <img src={imgRight} alt="imgRight" className="imgRight" />
        </div>
      </div>
    </div>
  );
};
