import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import CommonLayout from "../../components/CommonLayout";
import Banner from "../../components/Banner";

import "./index.css";

const renderForm = () => (
  <div className="contact-us-form">
    <div className="label-input">
      <label htmlFor="Name">Name : </label>
      <input id="Name" />
    </div>
    <div className="label-input">
      <label htmlFor="PhoneNumber">Phone Number : </label>
      <input id="PhoneNumber" />
    </div>
    <div className="label-input">
      <label htmlFor="Email">Email : </label>
      <input id="Email" />
    </div>
    <div className="label-input">
      <label htmlFor="Message">Your Message : </label>
      <textarea id="Message" rows="8"></textarea>
    </div>
    <button className="send-button">Send</button>
  </div>
);

const renderContactDetails = () => (
  <div>
    <div className="contact-us-details">
      <div className="contact-us-icon">
        <IoLocationOutline color="#fff" size={26} />
      </div>
      <div>
        <h1>Visit us :</h1>
        <p>27 Division St, New York, NY 10002, USA</p>
      </div>
    </div>
    <div className="contact-us-details">
      <div className="contact-us-icon">
        <FiPhone color="#fff" size={22} />
      </div>
      <div>
        <h1>Phone Number :</h1>
        <p>+1 (800) 123 456 789</p>
      </div>
    </div>
    <div className="contact-us-details">
      <div className="contact-us-icon">
        <MdAlternateEmail color="#fff" size={24} />
      </div>
      <div>
        <h1>Gmail :</h1>
        <p>admin@admin.com</p>
      </div>
    </div>

    <img
      src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/map"
      alt="map"
      className="contact-us-map"
    />
  </div>
);

const Contact = () => {
  return (
    <CommonLayout>
      <Banner pathNameText="CONTACT" />
      <div className="contact-us">
        <h1 className="contact-us-tilte">CONTACT US</h1>

        <div className="contact-us-form-details">
          {renderContactDetails()}

          <div className="contact-us-line"></div>

          {renderForm()}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Contact;
