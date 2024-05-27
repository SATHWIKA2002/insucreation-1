import "./index.css";

const Banner = (props) => {
  const { pathNameText } = props;
  return (
    <div className="banner">
      <img
        src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/banner-img"
        alt="bannerImg"
        className="banner-img"
      />
      <h1 className="banner-path-name">{pathNameText}</h1>
    </div>
  );
};

export default Banner;
