import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PartnerContext } from '../App';

import { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

const ComponentToPrint = forwardRef((props, ref) => {

    const { state, dispatch } = useContext(PartnerContext);
    dispatch({ type: "PARTNER", payload: true });

    const location = useLocation();
    const _id = location.state._id;
    const partner = location.state.partner;
    const panchayat = location.state.panchayat;
    const block = location.state.block;
    const dist = location.state.dist;
    const farmer_name = location.state.farmer_name;
    const farmer_register = location.state.farmer_register;
    const father_husband_name = location.state.father_husband_name;
    const mobile = location.state.mobile;
    const aadhar = location.state.aadhar;
    const wife_husband_aadhar = location.state.wife_husband_aadhar;
    const reven_vill = location.state.reven_vill;
    const own_agri_land = location.state.own_agri_land;
    const khata = location.state.khata;
    const khesra = location.state.khesra;
    const rakwa = location.state.rakwa;
    const agri_implem = location.state.agri_implem;
    const crops = location.state.crops;
    const dis_pmp = location.state.dis_pmp;
    const no_dis_pmp = location.state.no_dis_pmp;
    const elec_pmp = location.state.elec_pmp;
    const no_elec_pmp = location.state.no_elec_pmp;
    const kcc = location.state.kcc;
    const benef_pm_kisan = location.state.benef_pm_kisan;
    const payment_install = location.state.payment_install;


    return (<div ref={ref}>

        <h3 className="text-center">Farmer Full Details</h3>

        <div className="container">
            <form className="card">
                <div style={{ padding: "20px 20px 0px 20px" }}>
                    <div class="form-group" style={{ "padding-top": "20px" }}>
                        <label for="exampleInputPassword1">Agriculture Co-ordinator:</label>
                        <input
                            // id="part"
                            type="text"
                            class="form-control"
                            name="partner"
                            //id="exampleInputPassword1"
                            value={partner}
                            // onChange={handleInputs}
                            // placeholder="Partner Name"
                            disabled={true}
                        />
                        {/* <div className="text-danger">{couponErr.partner_id}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Farmer Registration No. :</label>
                        <input
                            id="farm_reg"
                            type="text"
                            name="farmer_register"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={farmer_register}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Farmer Registtration No"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Farmer Name:</label>
                        <input
                            id="farm"
                            type="text"
                            name="farmer_name"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={farmer_name}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Farmer Name"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Father/Husband Name:</label>
                        <input
                            id="fathus"
                            type="text"
                            name="father_husband_name"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={father_husband_name}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Father or Husband Name"
                        />
                        {/* <div className="text-danger">{couponErr.validity}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Mobile No:</label>
                        <input
                            id="mob"
                            type="text"
                            name="mobile"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={mobile}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Mobile Number"
                        />
                        {/* <div className="text-danger">{couponErr.ediscount}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Farmer Aadhar:</label>
                        <input
                            id="aadh"
                            type="text"
                            name="aadhar"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={aadhar}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Farmer Aadhar No"
                        />
                        {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Revenue Village:</label>
                        <input
                            id="reven"
                            type="text"
                            name="reven_vill"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={reven_vill}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Revenue Village"
                        />
                        {/* <div className="text-danger">{couponErr.validity}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Panchayat:</label>
                        <input
                            id="panch"
                            type="text"
                            name="panchayat"
                            class="form-control"
                            //id="exampleInputEmail1"
                            //aria-describedby="emailHelp"
                            value={panchayat}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Panchayat"
                        />
                        {/* <div className="text-danger">{couponErr.product_id}</div> */}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Block:</label>
                        <input
                            id="block"
                            type="text"
                            name="block"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={block}
                            // onChange={handleInputs}
                            // placeholder="Block"
                            disabled={true}
                        />
                        {/* <div className="text-danger">{couponErr.coupon_code}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">District:</label>
                        <input
                            id="dist"
                            type="text"
                            name="dist"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={dist}
                            // onChange={handleInputs}
                            // placeholder="District"
                            disabled={true}
                        />
                        {/* <div className="text-danger">{couponErr.min_price}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Wife/Husband Aadhar:</label>
                        <input
                            id="wifhusaadh"
                            type="text"
                            name="wife_husband_aadhar"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={wife_husband_aadhar}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Wife or Husband Aadhar No"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Own Agriculture Land:</label>
                        <input
                            id="ownagr"
                            type="text"
                            name="own_agri_land"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={own_agri_land}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="own agri land"
                        />
                        {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Khata:</label>
                        <input
                            id="khat"
                            type="text"
                            name="khata"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={khata}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Khata"
                        />
                        {/* <div className="text-danger">{couponErr.validity}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Khesra:</label>
                        <input
                            id="khes"
                            type="text"
                            name="khesra"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={khesra}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Khesra"
                        />
                        {/* <div className="text-danger">{couponErr.ediscount}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Rakwa:</label>
                        <input
                            id="rak"
                            type="text"
                            name="rakwa"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={rakwa}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Rakwa"
                        />
                        {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Crops:</label>
                        <input
                            id="crop"
                            type="text"
                            name="crops"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={crops}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Crops"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Diesel Pumpset:</label>
                        <input
                            id="crop"
                            type="text"
                            name="crops"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={dis_pmp}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Crops"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">No of Diesel Pumpset:</label>
                        <input
                            id="crop"
                            type="text"
                            name="crops"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={no_dis_pmp}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Crops"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Electric Pumpset:</label>
                        <input
                            id="crop"
                            type="text"
                            name="crops"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={elec_pmp}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Crops"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    
                    <div class="form-group">
                        <label for="exampleInputPassword1">No of Electric Pumpset:</label>
                        <input
                            id="crop"
                            type="text"
                            name="crops"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={no_elec_pmp}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Crops"
                        />
                        {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Agricultural Implements:</label>
                        <input
                            id="agr_imp"
                            type="text"
                            name="agr_implem"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={agri_implem}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Agricultural Implements"
                        />
                        {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Kisan Credit Card:</label>
                        <input
                            id="kcc"
                            type="text"
                            name="kcc"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={kcc}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="KCC"
                        />
                        {/* <div className="text-danger">{couponErr.ediscount}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Beneficiery of PM Kisan:</label>
                        <input
                            id="benef"
                            type="text"
                            name="benef_pm_kisan"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={benef_pm_kisan}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Beneficiery of PM Kisan"
                        />
                        {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Payment Installment:</label>
                        <input
                            id="payminst"
                            type="text"
                            name="payment_install"
                            class="form-control"
                            //id="exampleInputPassword1"
                            value={payment_install}
                            disabled={true}
                        // onChange={handleInputs}
                        // placeholder="Payment Installment"
                        />
                        {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                    </div>
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
            width: 50%   
                            
         }
         .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
            transition: 0.3s;
            border-radius: 20px
         }
        
         .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
         }

         .form-group {
            display: flex;
            flex-direction: row
            flex-wrap: wrap
            justify-content: space-evenly
            margin: 10px
            padding-right: 10px
         }
         label {
            font-size: 18px;
            // display: inline-block;
            width: 200px;
            text-align: left;
            margin: 10px
         }
         `}</style>

    </div>
    )
});

const Fulldetails = () => {

    const ref = useRef();


    const navigate = useNavigate();


    const goBack = () => {
        navigate('/home');
    }

    return (

        <div>

            <div className="text-right mt-20">
                <ReactToPrint content={() => ref.current}>
                    <PrintContextConsumer>
                        {({ handlePrint }) => (
                            <button type="submit" class="btn btn-primary  m-3" onClick={handlePrint}>Print this out!</button>
                        )}
                    </PrintContextConsumer>
                </ReactToPrint>
                <button
                    type="submit"
                    onClick={goBack}
                    class="btn btn-secondary  m-3">
                    Go Back
                </button>
            </div>

            <ComponentToPrint ref={ref} />

        </div>
    );
};

export default Fulldetails;