import React, { useState } from 'react';
import bgFooter from '../../assets/bg-footer-squiggle.svg';
import Input from '../../components/input/Input';
import './Footer.scss';

export function Footer() {
  const [emailForm, setemailForm] = useState('');
  const [error, seterror] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    seterror(!re.test(email));
    return re.test(email);
  };

  return (
    <div className="footer__container">
      <img src={bgFooter} alt="bgFooter" className="footer__img" />
      <div className="footer__contaner--input">
        <h1 className="footer__text">Get notified when we launch</h1>
        <div className="input__container">
          <div className="input__container--iner">
            <Input
              placeholder="Email address"
              name="email"
              type="email"
              onChange={(e) => setemailForm(e.target.value)}
              value={emailForm}
              error={error}
            />
            {error && (
              <span className="error__label">
                Oops! That doesn’t look like an email address
              </span>
            )}
          </div>
          <button
            className={`footer__button ${error ? 'error' : ''}`}
            onClick={() => validateEmail(emailForm)}
            type="submit"
          >
            Get notified
          </button>
        </div>
      </div>
    </div>
  );
}
