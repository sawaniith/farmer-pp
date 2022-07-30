import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PartnerContext } from '../App';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Filters = () => {

    const { state, dispatch } = useContext(PartnerContext);
    dispatch({ type: "PARTNER", payload: true });
    const [panchayt, setPanchayt] = useState("ALL PANCH");

    const [farmers, setFarmers] = useState([
        {
            _id: "",
            partner: "",
            panchayat: "",
            block: "",
            dist: "",
            farmer_name: "",
            farmer_register: "",
            father_husband_name: "",
            mobile: "",
            aadhar: "",
            wife_husband_aadhar: "",
            reven_vill: "",
            own_agri_land: "",
            khata: "",
            khesra: "",
            rakwa: "",
            agri_implem: "",
            crops: [],
            dis_pmp: "",
            no_dis_pmp: "",
            elec_pmp: "",
            no_elec_pmp: "",
            kcc: "",
            benef_pm_kisan: "",
            payment_install: ""
        }
    ]);

    const navigate = useNavigate();

    const getFarmer = async () => {

        try {
            const res = await fetch('/getfarmer', {
                method: "GET",
                // body: JSON.stringify({panchayat: panchayt}),
                headers: {
                    // Accept:"application/json",
                    "Content-Type": "application/json"
                },
                // credentials:"include"
            });

            const data = await res.json();

            setFarmers(data);

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    }


    const getFarmers = async () => {

        try {
            const res = await fetch('/getfarmers', {
                method: "POST",
                body: JSON.stringify({ panchayat: panchayt }),
                headers: {
                    // Accept:"application/json",
                    "Content-Type": "application/json"
                },
                // credentials:"include"
            });

            const data = await res.json();

            setFarmers(data);

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    }


    { (panchayt === 'ALL PANCH') ? getFarmer() : getFarmers() }

    const string = (arr) => {
        let str = arr.toString();
        return str;
    }

    let sr = 1;

    return (

        <div className="container">

            <h3 className="p-3 text-center">Export to Excel</h3>

            <div className="text-right">
                <ReactHTMLTableToExcel
                    id="test-table-xlsx-button"
                    className="download-table-xlsx-button btn btn-success m-3"
                    table="table-to-xlsx"
                    filename="farmerxlsx"
                    sheet="tablexlsx"
                    buttonText="Export to Excel" />
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1"><strong>Panchayat:</strong></label>
                <select class="form-select" name="panchayt" id="panch" aria-label="Default select example" value={panchayt} onChange={(e) => setPanchayt(e.target.value)}>
                    <option name="panchayt" value="ALL PANCH">ALL PANCHAYAT</option>
                    <option name="panchayt" value="BABHANGAMA">BABHANGAMA</option>
                    <option name="panchayt" value="LATTIPUR NORTH">LATTIPUR NORTH</option>
                    <option name="panchayt" value="LATTIPUR SOUTH">LATTIPUR SOUTH</option>
                </select>
            </div>

            <table id="table-to-xlsx" className=" example table table-striped table-bordered" style={{ "display": "block", "overflow-x": "auto", "white-space": "nowrap" }}>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Farmer Registration No</th>
                        <th>Farmer Name</th>
                        <th>Father/Husband Name</th>
                        <th>Mobile</th>
                        <th>Aadhar</th>
                        <th>Revenue Village</th>
                        <th>Panchayat</th>
                        <th>Block</th>
                        <th>District</th>
                        <th>Wife/Husband Aadhar</th>
                        <th>Own Agriculture Land</th>
                        <th>Khata</th>
                        <th>Khesra</th>
                        <th>Rakwa</th>
                        <th>Crops</th>
                        <th>Diesel Pumpset</th>
                        <th>No of Diesel Pumpset</th>
                        <th>Electric Pumpset</th>
                        <th>No of Electric Pumpset</th>
                        <th>Agricultural Implements</th>
                        <th>Kisan Credit Card</th>
                        <th>Beneficiery of PM Kisan</th>
                        <th>Payment Installment</th>
                    </tr>
                </thead>
                <tbody>
                    {farmers && farmers.map(farmer =>
                        <tr key={farmer._id}>
                            <td> {sr++}</td>
                            <td>{farmer.farmer_register}</td>
                            <td>{farmer.farmer_name}</td>
                            <td>{farmer.father_husband_name}</td>
                            <td>{farmer.mobile}</td>
                            <td>{farmer.aadhar}</td>
                            <td> {farmer.reven_vill}</td>
                            <td>{farmer.panchayat}</td>
                            <td>{farmer.block}</td>
                            <td>{farmer.dist}</td>
                            <td>{farmer.wife_husband_aadhar}</td>
                            <td>{farmer.own_agri_land}</td>
                            <td>{farmer.khata}</td>
                            <td>{farmer.khesra}</td>
                            <td>{farmer.rakwa}</td>
                            <td>{string(farmer.crops)}</td>
                            <td>{farmer.dis_pmp}</td>
                            <td>{farmer.no_dis_pmp}</td>
                            <td>{farmer.elec_pmp}</td>
                            <td>{farmer.no_elec_pmp}</td>
                            <td>{farmer.agri_implem}</td>
                            <td>{farmer.kcc}</td>
                            <td>{farmer.benef_pm_kisan}</td>
                            <td>{farmer.payment_install}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <style jsx>{`
        body {
          background-color: lightblue
        }
        .example {
          background-color: white
        }
      `}</style>
        </div>
    );
};

export default Filters;