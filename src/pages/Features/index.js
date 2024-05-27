import { MdOutlineContentCopy } from "react-icons/md";
import CommonLayout from "../../components/CommonLayout";
import Banner from "../../components/Banner";

import "./index.css";

const Feature = () => (
  <div className="feature">
    <div className="feature-icon">
      <MdOutlineContentCopy color="#fff" size={24} />
    </div>
    <div className="feature-border"></div>
    <h1>Easy Copy And Paste</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  </div>
);

const Features = () => {
  return (
    <CommonLayout>
      <Banner pathNameText="FEATURES" />

      <div className="features">
        <h1 className="features-tilte">The Features To Create Your</h1>

        <div className="features-list">
          {Array.from({ length: 6 }, (_, index) => (
            <Feature key={index} />
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Features;
