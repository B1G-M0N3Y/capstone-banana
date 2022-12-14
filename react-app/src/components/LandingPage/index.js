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
            <NavLink className='navlink' to="/items/1">Order Now ></NavLink>
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
      <div className="bottom-container">
        <div className="bottom bananas">
          <div className="bottom-text">
            <h1 className="bottom-title">Banana</h1>
            <h3 className="bottom-desc">Bigger. Bolder. Bananer.</h3>
            <div className="bottom-container-links">
              <NavLink className='navlink' to="/items/1">Order Now ></NavLink>
            </div>
          </div>
          <img src="https://i.imgur.com/MecVzxL.png"></img>
        </div>
        <div className="bottom banana-bunches">
          <h1 className="bottom-title">Banana Bunch</h1>
          <h3 className="bottom-desc">Bunches of Fun.</h3>
          <NavLink className='navlink' to="/items/3">Order Now ></NavLink>
          <img id='bottom-banana-bunch-img' src='https://i.pinimg.com/originals/44/e0/19/44e019cfd2d2803444cb9010b164e98a.png'></img>
        </div>
        <div className="bottom banana-peels">
          <div id='peel-text'>
            <h1 className="bottom-title">Banana Peel</h1>
            <h3 className="bottom-desc">Get your Banana a new shell.</h3>
            <NavLink className='navlink' to="/items/6">Order Now ></NavLink>
          </div>
          <img id='bottom-banana-peel-img' src='https://i.imgur.com/FnT0Ovs.png'></img>
        </div>
        <div className="bottom banano">
          <h1 className="bottom-title">Banano</h1>
          <h3 className="bottom-desc">On the Bus or on the Train.</h3>
          <NavLink className='navlink' to="/items/5">Order Now ></NavLink>
          <img src='https://i.imgur.com/le3ZptD.png'></img>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
