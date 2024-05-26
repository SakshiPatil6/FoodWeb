import './login.css';
import axios from 'axios';
import { useState } from "react";
import {  useNavigate } from 'react-router';

function Login({ children }) {


    const [values, setValues] = useState({
        email: "",
        password: ""
    })


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/foodweb', values)
            .then(res => { 

                console.log("Login succesfull", res);
                navigate("/WebPage1");
            })
            
            .catch(err => (console.log("Error", err)));
        //req.headers["Access-Control-Allow-Origin:"] = "8081";

    }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }

    const logi = () => { document.getElementById('id01').style.display = "block" }
    const cancel = () => { document.getElementById('id01').style.display = "none" }

    window.onclick = function (event) {
        if (event.target === document.getElementById('id01')) {
            document.getElementById('id01').style.display = "none";
        }
    }


    return (
        <>


            <button style={{ width: "auto" }} id="log" className="btn" onClick={logi}>{children} </button>

            
            <div id="id01" className="modal">

                <form className="modal-content animate">
                    {/* <div class="imgcontainer">
                        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                        <img src="img_avatar2.png" alt="Avatar" class="avatar" />
                    </div> */}

                    <div className="container">
                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="email" placeholder="Enter email" name="email" required
                            onChange={handleChange} />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required
                            onChange={handleChange} />


                        <button type="submit" className='button' onClick={handleSubmit}>Login</button>
                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="container" style={{ backgroundcolor: "#FF6347" }}>
                        <button type="button" className="cancelbtn" id='cancel1' onClick={cancel}>Cancel</button>
                        <span class="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;