import { LuClock2 } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

import "./index.css";

const dummyLinksDetails = [
  {
    linksHeader: "Quick Links",
    links: ["Home", "About us", "Careers", "News & Articles"],
  },
  {
    linksHeader: "Useful Links",
    links: ["Help Center", "Contact Us", "FAQ", "Parent Community"],
  },
];

const renderLinks = (linksDetails) => {
  const { linksHeader, links } = linksDetails;
  return (
    <div className="links">
      <h1>{linksHeader}</h1>
      <img
        src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/yellow-waves"
        alt="yellowWavesDecor"
      />
      {links.map((link, index) => (
        <p key={index} className="link">
          {link}
        </p>
      ))}
    </div>
  );
};

const renderSchoolHours = () => (
  <div className="school-hours">
    <h1>School Hours</h1>
    <img
      src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/yellow-waves"
      alt="yellowWavesDecor"
    />
    <div>
      <LuClock2 color="#3ddd35" size={20} />
      <p>8 AM - 5 PM, Monday - Saturday</p>
    </div>
    <div>
      <CiLocationOn color="#3ddd35" size={22} />
      <p>
        Aut, quae convallis minim cum ornare! Pede ut rem, totam dictum
        convallis.
      </p>
    </div>
    <div>
      <div className="footer-social-media-icon">
        <FaFacebookSquare size={20} color="#000000" />
      </div>
      <div className="footer-social-media-icon">
        <FaTwitter size={20} color="#000000" />
      </div>
      <div className="footer-social-media-icon">
        <FaInstagram size={20} color="#000000" />
      </div>
    </div>
  </div>
);

const subscribeNewsletter = () => (
  <div className="subscribe">
    <div className="subscribe-width-large">
      <h1>Subscribe Our Newsletter!</h1>
      <div className="subscribe-bottom-line"></div>
      <p>
        Elementum ex similique sollicitudin eveniet sem eveniet proin, iste
        euismod! Quia! Fugiat molestie leo placerat, tenetur.
      </p>
    </div>
    <div className="subscribe-hr"></div>
    <div className="input-button-container">
      <input className="subscriber-input" />
      <button className="subscribe-button">SUBSCRIBE</button>
    </div>
  </div>
);

const Footer = () => (
  <>
    <div className="footer">
      {subscribeNewsletter()}
      <p className="footer-des">
        Vero, tempor morbi, adipiscing aliqua nonummy proident perferendis?
        Laboris lacus quidem repellendus quasi.
      </p>
      <div className="links-flex-container">
        {renderLinks(dummyLinksDetails[0])}
        {renderLinks(dummyLinksDetails[1])}
      </div>
      {renderSchoolHours()}
    </div>
    <div className="footer-bottom-section">
      <p>Copyright © 2022 Educator. All rights reserved.</p>
      <p>PRIVACY POLICY | SUPPORT | TERMS & CONDITION</p>
    </div>
  </>
);

export default Footer;
