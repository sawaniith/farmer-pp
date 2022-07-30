import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [partner, setPartner] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setPartner({ ...partner, [name]: value });

    var element = document.getElementById("ptnm")
    element.setCustomValidity("")
    element = document.getElementById("phne")
    element.setCustomValidity("")
    element = document.getElementById("email")
    element.setCustomValidity("")
    element = document.getElementById("pswd")
    element.setCustomValidity("")
    element = document.getElementById("cpswd")
    element.setCustomValidity("")
  };

  const validate = (partner_) => {
    const errors= {}
    if(!partner_.name || partner_.name==="") errors.name="Cannot be blank"
    else errors.name=""
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!partner_.email || partner_.email==="") errors.email="Cannot be blank"
    else if(!reg.test(partner_.email)) errors.email="Enter a valid email ID"
    else errors.email=""
    var phoneno = /^\d{10}$/;
    if(!partner_.phone || partner_.phone==="") errors.phone="Cannot be blank"
    else if(!partner_.phone.match(phoneno)) errors.phone="Enter a valid phone number"
    else errors.phone=""
    if(!partner_.password || partner_.password === "") errors.password="Cannot be blank"
    else errors.password=""
    if(!partner_.cpassword || partner_.cpassword === "") errors.cpassword="Cannot be blank"
    else if(partner_.password !== partner_.cpassword) errors.cpassword="Passwords don't match"
    else errors.cpassword=""
    return errors
  }

  const postData = async (e) => {
    e.preventDefault();
    let valid = validate(partner)
    if(valid.name !== ""){
      var element = document.getElementById("ptnm")
      // console.log("hi")
      element.setCustomValidity(valid.name);
      element.reportValidity();
      return
    }
    if(valid.phone !== ""){
      var element = document.getElementById("phne")
      // console.log("hi")
      element.setCustomValidity(valid.phone);
      element.reportValidity();
      return
    }
    if(valid.email !== ""){
      var element = document.getElementById("email")
      // console.log("hi")
      element.setCustomValidity(valid.email);
      element.reportValidity();
      return
    }
    if(valid.password !== ""){
      var element = document.getElementById("pswd")
      // console.log("hi")
      element.setCustomValidity(valid.password);
      element.reportValidity();
      return
    }
    if(valid.cpassword !== ""){
      var element = document.getElementById("cpswd")
      // console.log("hi")
      element.setCustomValidity(valid.cpassword);
      element.reportValidity();
      return
    }

    const { name, email, phone, password, cpassword } = partner;

    console.log(name,email, phone, password, cpassword );
    const resp = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword
      })
    });

    // const data = await resp.json();
    const status = resp.status;
    console.log(status);
    if (status === 201) {
      window.alert("Registration Successful");
      console.log("registeration successful");
      navigate("/");
    } else {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
    }
  }

  const logIn=()=>{
     navigate('/');
  }

  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Sign Up</h1>

      <div className="container">
        <form method="POST" className="card">
          <div style={{padding:"20px 20px 0px 20px"}}>
            <div class="form-group"  style={{"padding-top":"20px"}}>
              <label>Agriculture Co-ordinator Name:</label>
              <input
              id="ptnm"
                type="text"
                name="name"
                class="form-control"
                value={partner.name}
                onChange={handleInputs}
                placeholder="Your Name"
              />
              {/* <div className="text-danger">{credErr.name}</div> */}
            </div>
            <div class="form-group">
              <label>Phone No. :</label>
              <input
              id="phne"
                type="text"
                name="phone"
                class="form-control"
                value={partner.phone}
                onChange={handleInputs}
                placeholder="phone"
              />
              {/* <div className="text-danger">{credErr.phone}</div> */}
            </div>
            <div class="form-group">
              <label>Email address:</label>
              <input
              id="email"
                type="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                value={partner.email}
                onChange={handleInputs}
                placeholder="Enter email"
              />
              {/* <div className="text-danger">{credErr.email}</div> */}
            </div>
            <div className="text-center">
            <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
            </small>
            </div>
            <br />
            <div class="form-group">
              <label>Password:</label>
              <input
              id="pswd"
                type="password"
                class="form-control"
                name="password"
                value={partner.password}
                onChange={handleInputs}
                placeholder="Password"
              />
              {/* <div className="text-danger">{credErr.password}</div> */}
            </div>
            <div class="form-group">
              <label>Confirm Password:</label>
              <input
              id="cpswd"
                type="password"
                name="cpassword"
                class="form-control"
                value={partner.cpassword}
                onChange={handleInputs}
                placeholder="Password"
              />
              {/* <div className="text-danger">{credErr.cpassword}</div> */}
            </div>

            <div className="text-center">
              <button
                type="submit"
                onClick={postData}
                class="btn btn-primary  m-2">
                Register
              </button>
              <button
                type="submit"
                onClick={logIn}
                class="btn btn-secondary  m-2">
                Already Registered? Go to Login
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
        .container{
            padding: 10px
            display: flex;
            flex-direction: column;
            align-items: stretch;
            width: 45%   
                            
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
            padding-right: 10px
            margin: 10px
        }
        label {
            font-size: 18px;
            display: inline-block;
            width: 250px;
            text-align: left;
            margin: 10px
        }
    `}</style>
    </div>
  );
}

export default Signup;
// 