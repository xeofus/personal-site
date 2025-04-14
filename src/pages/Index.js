import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Adi Kann's personal website. Florida Tech graduate student, "
      + 'ISC2 CC, USAF Airman.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to my website</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        I’m a transitioning U.S. Air Force professional with an active
        Secret Clearance and a passion for securing mission-critical
        systems. Drawing on hands-on experience in Java, Linux, SQL, and
        Cybersecurity I bring a blend of technical expertise,
        leadership, and problem-solving to every project.<br />
        As a Master’s in Computer Information Systems and fluent Russian
        speaker, I’m also well-positioned to support threat intelligence or
        translation needs.
        <br />
        <br />
        You can check out my{' '}
        <Link to="/resume">resume</Link> or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
