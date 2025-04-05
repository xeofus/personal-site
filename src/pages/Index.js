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
            <Link to="/">About this site</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. You can check out my{' '}
        <Link to="/resume">resume</Link> or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
