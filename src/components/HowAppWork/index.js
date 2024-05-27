import { RiAccountCircleFill } from "react-icons/ri";

import "./index.css";

const HowAppWork = () => (
  <div className="how-app-work">
    <h1 className="how-app-work-title">How does This App Work?</h1>
    <img
      src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/red-steps"
      alt="redStepsDecor"
      className="how-app-work-decor"
    />

    <div className="how-app-work-details">
      <img
        src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/how-app-work"
        alt="howAppWorks"
        className="how-app-works-img"
      />

      <div>
        <div className="app-steps-card">
          <div className="light-color-area red-light">
            <div className="medium-color-area red-medium">
              <RiAccountCircleFill color="#D22D4A" size={32} />
            </div>
          </div>
          <div>
            <h1 className="app-step-header">Make A Profile</h1>
            <p className="app-step-des">
              Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit
              leo at nunc imperdiet, quis lacinia nisi euismod.
            </p>
          </div>
        </div>
        <div className="app-steps-card">
          <div className="light-color-area blue-light">
            <div className="medium-color-area blue-medium">
              <RiAccountCircleFill color="#1798B4" size={32} />
            </div>
          </div>
          <div>
            <h1 className="app-step-header">Make A Profile</h1>
            <p className="app-step-des">
              Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit
              leo at nunc imperdiet, quis lacinia nisi euismod.
            </p>
          </div>
        </div>
        <div className="app-steps-card">
          <div className="light-color-area yellow-light">
            <div className="medium-color-area yellow-medium">
              <RiAccountCircleFill color="#F1B11A" size={32} />
            </div>
          </div>
          <div>
            <h1 className="app-step-header">Make A Profile</h1>
            <p className="app-step-des">
              Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit
              leo at nunc imperdiet, quis lacinia nisi euismod.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowAppWork;
