import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
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
      <div className="middle-container">
        <h1 className="section-title">Banana for the holidays</h1>
        <h3 className="section-info">Share the gift of Banana this holiday season.</h3>
        <div id='banana-graphics'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png'></img>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png'></img>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png'></img>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
