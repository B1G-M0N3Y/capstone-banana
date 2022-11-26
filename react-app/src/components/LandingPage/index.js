import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="top-container">
      <div className="top-container-text">
        <h1 className="section-title">Banana 14</h1>
        <h3 className="section-info">Our most Potassium. Ever.</h3>
        <div className="top-container-links">
          <NavLink className='navlink' to="/">Learn More ></NavLink>
          <NavLink className='navlink' to="/">Order Now ></NavLink>
        </div>
      </div>
      <img src="https://i.imgur.com/gagWTDt.jpg"></img>
    </div>
  );
};

export default LandingPage;
