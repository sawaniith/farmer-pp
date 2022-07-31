import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { PartnerContext } from '../App';
import '../styles/globals.css'

const Reset = () => {

    // const { state, dispatch } = useContext(PartnerContext);
    // dispatch({ type: "PARTNER", payload: true });

    const navigate = useNavigate();

    const location = useLocation();
    const name = location.state.name;
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfPassword] = useState('');

    const validate = (password_, cnfpassword_) => {
        const errors= {}
        if(!password_ || password_ === "") errors.password="Cannot be blank"
        else errors.password=""
        if(!cnfpassword_ || cnfpassword_ === "") errors.cpassword="Cannot be blank"
        else if(password_ !== cnfpassword_) errors.cpassword="Passwords don't match"
        else errors.cpassword=""
        return errors
    }

    const reset = async (e) => {
        e.preventDefault();

        let valid = validate(password, cnfpassword)
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

        const resp = await fetch("/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                password,
                cnfpassword
            })
        });

        // const data = await resp.json();
        const status = resp.status;
        console.log(status);
        if (status === 201) {
            window.alert("Password Reset Successful");
            navigate("/");
        } else {
            window.alert("Invalid credentials");
            console.log("Invalid credentials");
        }
    }

    const logIn = () => {
        navigate('/');
    }


    return (

        <div>
            <h1 className="text-center mt-4 mb-4">Reset Password</h1>
            <div className="container">

                <form method="POST" className="card">
                    <div style={{padding:"20px 20px 0px 20px"}}>
                        <div class="form-group" style={{ "padding-top": "20px" }}>
                            <label>Enter New Password</label>
                            <input
                                id="pswd"
                                type="password"
                                class="form-control"
                                value={password}
                                autocomplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter New Password"
                            />
                        </div>
                        <div class="form-group">
                            <label> Confirm New Password</label>
                            <input
                                id="cpswd"
                                type="password"
                                class="form-control"
                                value={cnfpassword}
                                autocomplete="off"
                                onChange={(e) => setCnfPassword(e.target.value)}
                                placeholder="Confirm New Password"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={reset} class="btn btn-primary  m-3">
                                Reset
                            </button>
                            <button type="submit" onClick={logIn} class="btn btn-secondary  m-3">
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
        </div >
    );
}

export default Reset