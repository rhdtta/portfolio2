import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Rohit Dutta</h2>
        <p>Hi, I&apos;m Rohit. I am a <a href="https://www.iitp.ac.in/">IIT Patna</a> graduate,
        and Associate Developer at <a href="https://www.vml.com/india">VML</a>.
        </p>
        {/* <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul> */}
      </header>
      {!window.location.pathname.includes('/contact') && <ContactIcons /> }
      
    </section>

    {/* <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Rohit. I am a <a href="https://www.iitp.ac.in/">IIT Patna</a> graduate,
        and Associate Developer at <a href="https://www.vml.com/india">VML</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section> */}

    {/* <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Rohit Dutta <Link to={`${PUBLIC_URL}`}>rhdtta.io</Link>.</p>
    </section> */}
  </section>
);

export default SideBar;
