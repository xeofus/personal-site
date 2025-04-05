import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Adi (Eddie) Kann</h2>
        <p>
          <a href="https://thekann.com">thekann.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Adi and I am a{' '}
        <a href="https://fit.edu/">Florida Tech</a> graduate student,
        ISC2 Cyber Certified and proud Airman in United States Air Force.
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Adi B. Kann <Link to="/">thekann.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
