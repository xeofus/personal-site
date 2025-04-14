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
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Adi - a proud Airman in the United States Air Force,
        an ISC2 Cyber Certified professional, and a graduate student at {' '}
        <a href="https://www.fit.edu/programs/computer-information-systems-ms/">Florida Tech’s College of Engineering and Science</a>
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            RESUME
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Adi B. Kann <Link to="/">adi.thekann.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
