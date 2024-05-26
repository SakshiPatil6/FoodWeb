import "./App.css";
 import logo from './logo.avif';
// import food from './food.jpg';
// import back from './back.png';
import Login from './components/login/Login';
import SignUp from './components/login/signup';
import Footer from "./components/foot/footer";

function home()
{
  return (
    <>
      
      <div className="parent">
        <div className="col col1 child c1">
          <img src={logo} alt="Logo" className="logoHome"></img>
          <SignUp className="signupbtn">SignUp</SignUp>
          <Login  className="btnH">Login</Login>
          
          <div className="writeup">
            <h2 className="headingH">Hungry?</h2>
            <p>Order your favorite food and enjoy.</p>
            <p className="para">A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
          </div>
        </div>


        <div className="col col2 child">
          <img src='./food.jpg' alt="Food" className="foodimg" style={{ height: "60vh", width: "50vw" }}></img>
        </div>
      </div>
      <img src='./back.png' alt="a" className="image"></img>
<Footer/>

    </>

  );
}

export default home;