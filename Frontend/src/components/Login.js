import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PartnerContext } from '../App';
import '../styles/globals.css'

function Login() {

  const { state, dispatch } = useContext(PartnerContext);
  dispatch({ type: "PARTNER", payload: false });

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const ref = useRef(null)

  const validate = (name_, password_) => {
    const errors = {}
    if (!name_ || name_ === "") errors.name = "Cannot be blank"
    else errors.name = ""
    if (!password_ || password_ === "") errors.password = "Cannot be blank"
    else errors.password = ""
    return errors
  }



  const loginUser = async (e) => {
    e.preventDefault();
    let valid = validate(name, password)
    // console.log(valid.name, valid.password)
    // console.log(fname)
    if (valid.name !== "") {
      var element = document.getElementById("ptid")
      // console.log("hi")
      element.setCustomValidity(valid.name);
      element.reportValidity();
      return
    }
    if (valid.password !== "") {
      var element = document.getElementById("pswd")
      // console.log("hi")
      element.setCustomValidity(valid.password);
      element.reportValidity();
      return
    }

    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password
      })
    });

    // const data = await resp.json();
    const status = resp.status;
    console.log(status);
    if (status === 201) {
      dispatch({ type: "PARTNER", payload: true });
      // window.alert("Logged in Successfully");
      navigate("/home");
    } else {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    }
  }

  const signUp = () => {
    navigate('/signup');
  }

  const forgot = () => {
    navigate('/forgot');
  }


  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Agriculture Co-ordinator Dashboard</h1>
      <h3 className="text-center mb-4">Log in to Continue</h3>
      <br />
      <div className="container">
        <form method="POST" className="card">
          <div style={{ padding: "20px 20px 0px 20px" }}>
            <div class="form-group" style={{ "padding-top": "20px" }}>
              <label for="fname">Agriculture Co-ordinator ID:</label>
              <input
                id="ptid"
                type="text"
                class="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                //   id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your ID (Name)"
              />
              {/* <div className="text-danger">{credErr.name}</div> */}
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input
                id="pswd"
                type="password"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                //   id="exampleInputPassword1"
                placeholder="Password"
              />
              {/* <div className="text-danger">{credErr.password}</div> */}
            </div>

            <div className="text-center">
              <button type="submit" onClick={loginUser} class="btn btn-success  m-3">
                Login
              </button>
              <button type="submit" onClick={forgot} class="btn btn-primary  m-2">
                Forgot Password
              </button>
            </div>
            <div className="text-center">
              <button type="submit" onClick={signUp} class="btn btn-info  m-2">
                Not a User? Sign Up
              </button>
            </div>
            <br />
          </div>
        </form>
      </div>
      <style jsx>{`
        body {
          background-color: lightblue;
        }
        h1{
          padding: 20px
        }
        h3{
          padding: 20px
        }
        .container{
            padding: 10px
            display: flex;
            flex-direction: column;
            align-items: stretch;            
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 20px
        }
        
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .form-group {
            display: flex;
            flex-direction: row
            justify-content: space-evenly
            margin: 10px
            padding-right: 10px
        }
        label {
            font-size: 18px;
            display: inline-block;
            width: 200px;
            text-align: left;
            margin: 10px
        }
    `}</style>
    </div>
  );
}

export default Login;