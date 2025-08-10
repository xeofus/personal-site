import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Eddie Kann's personal website. Florida Tech graduate student, "
      + 'CompTIA Security+, Linux+, ISC2 CC, USAF Airman.'
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
        I’m a transitioning USAF service member, Security+ and Linux+ certified,
        with 8+ years across Windows/Linux administration, scripting, programming,
        and cybersecurity. Active Secret clearance (TS/SCI eligible).
        I’m eager to leverage these skills in cybersecurity engineering
        or threat intelligence roles that advance national security missions. <br />
        As a fluent Russian (DLPT 3) speaker,
        I’m also well-positioned to support threat intelligence or translation needs.
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
