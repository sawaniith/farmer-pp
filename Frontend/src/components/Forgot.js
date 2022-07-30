import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { PartnerContext } from '../App';
import '../styles/globals.css'

const Forgot = () => {

    // const { state, dispatch } = useContext(PartnerContext);
    // dispatch({ type: "PARTNER", payload: true });

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const validate = (name_, email_, phone_) => {
        const errors= {}
        if(!name_ || name_==="") errors.name="Cannot be blank"
        else errors.name=""
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email_ || email_==="") errors.email="Cannot be blank"
        else if(!reg.test(email_)) errors.email="Enter a valid email ID"
        else errors.email=""
        var phoneno = /^\d{10}$/;
        if(!phone_ || phone_==="") errors.phone="Cannot be blank"
        else if(!phone_.match(phoneno)) errors.phone="Enter a valid phone number"
        else errors.phone=""
        return errors
    }

    const continu = async (e) => {
        e.preventDefault();
        let valid = validate(name, email, phone)
        if(valid.name !== ""){
            var element = document.getElementById("ptnm")
            // console.log("hi")
            element.setCustomValidity(valid.name);
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
        if(valid.phone !== ""){
            var element = document.getElementById("phne")
            // console.log("hi")
            element.setCustomValidity(valid.phone);
            element.reportValidity();
            return
        }
          

        const resp = await fetch("/forgot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone
            })
        });

        // const data = await resp.json();
        const status = resp.status;
        console.log(status);
        if (status === 201) {
            window.alert("Details Verified");
            navigate('/reset', {state: {name: name}});
            // navigate("/login");
        } else {
            window.alert("Details didn't matched");
            console.log("Invalid credentials");
        }
    }

    const logIn=()=>{
        navigate('/');
    }
    

    return (

        <div>
            <h1 className="text-center mt-4 mb-4">Confirm the Details below to Reset your Password</h1>
            <div className="container" >
                <form method="POST" className="card">
                    <div style={{padding:"20px 20px 0px 20px"}}>
                        <div class="form-group"   style={{"padding-top":"20px"}}>
                            <label>Agriculture Co-ordinator ID:</label>
                            <input
                            id="ptnm"
                                type="text"
                                class="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-describedby="emailHelp"
                                placeholder="Enter your ID (Name)"
                            />
                            {/* <div className="text-danger">{credErr.name}</div> */}

                        </div>
                        <div class="form-group">
                            <label>Enter Email:</label>
                            <input
                            id="email"
                                type="email"
                                class="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Registered Email"
                            />
                            {/* <div className="text-danger">{credErr.email}</div> */}

                        </div>
                        <div class="form-group">
                            <label>Enter Phone No. :</label>
                            <input
                            id="phne"
                                type="text"
                                class="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter Registered Phone"
                            />
                            {/* <div className="text-danger">{credErr.phone}</div> */}

                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={continu} class="btn btn-primary  m-2">
                                Continue
                            </button>
                            <button type="submit" onClick={logIn} class="btn btn-secondary  m-2">
                                Go Back to Login
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

export default Forgot