import Nav from "../Nav";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

const CommonLayout = ({ children }) => (
  <div className="common-layout-container">
    <Nav />
    {children}
    <Reviews />
    <Footer />
  </div>
);

export default CommonLayout;
