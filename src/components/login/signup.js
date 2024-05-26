import './login.css';
import axios from 'axios';
import { useState } from "react";

function Signup({ children }) {

  const [values, setValues] = useState({
    Name: "",
    email: "",
    Mobile: "",
    password:""
  })

  // const [Name, setname] = useState("");
  // const [email, setemail] = useState('');
  // const [Mobile, setmob] = useState('');
  // const [password, setpass] = useState('');

  const handleSubmit=(event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/foodweb',  values )
      .then(res => {
        console.log("resgistered succesfull", res);
        alert("Done");
      })
      .catch(err => (console.log("Error",err)));
    
    //req.headers["Access-Control-Allow-Origin:"] = "8081";
  }

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]})
  }

  const sign = () => { document.getElementById('id02').style.display = "block" }
  const cancel2 = () => { document.getElementById('id02').style.display = "none" }

  window.onclick = function (event) {
    if (event.target === document.getElementById('id02')) {
      document.getElementById('id02').style.display = "none";
    }
  }

  return (

    <>
      <button style={{ width: "auto" }} id="log" className="btn btn2" onClick={sign}>{children}
      </button>

      <div id="id02" className="modal">

        <form className="modal-content animate" >
          {/* <div class="imgcontainer">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <img src="img_avatar2.png" alt="Avatar" class="avatar" />
    </div> */}

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="Name" required
            onChange={handleChange}/>

            <label htmlFor="mob"><b>Mobile No</b></label>
            <input type="number" placeholder="Enter Mobile Number" name="Mobile" required
            onChange={handleChange}/>


            <label htmlFor="psw"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required
            onChange={handleChange}/>


            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required
            onChange={handleChange}/>


            <button type="submit" className="button" onClick={handleSubmit}>SignUp</button>
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>

          <div className="container" style={{ backgroundcolor: "#FF6347" }}>
            <button type="button" className="cancelbtn" id='cancel2' onClick={cancel2}>Cancel</button>
            <span class="psw">Forgot <a href="/">password?</a></span>
          </div>
        </form>
      </div>
    </>
  )
}
export default Signup;