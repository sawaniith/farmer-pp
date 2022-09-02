import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PartnerContext } from '../App';
import '../styles/globals.css'

const Home = () => {

  const { state, dispatch } = useContext(PartnerContext);
  dispatch({ type: "PARTNER", payload: true });
  const [panchayt, setPanchayt] = useState("ALL PANCH");
  const [query, setQuery] = useState("")

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

  getFarmer()

  const edit = (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) => {
    navigate('/edit', {
      state:
      {
        _id: a,
        partner: b,
        panchayat: c,
        block: d,
        dist: e,
        farmer_name: f,
        farmer_register: g,
        father_husband_name: h,
        mobile: i,
        aadhar: j,
        wife_husband_aadhar: k,
        reven_vill: l,
        own_agri_land: m,
        khata: n,
        khesra: o,
        rakwa: p,
        agri_implem: q,
        crops: r,
        dis_pmp: s,
        no_dis_pmp: t,
        elec_pmp: u,
        no_elec_pmp: v,
        kcc: w,
        benef_pm_kisan: x,
        payment_install: y
      }
    });
  }

  const fulldet = (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) => {
    navigate('/fulldetail', {
      state:
      {
        _id: a,
        partner: b,
        panchayat: c,
        block: d,
        dist: e,
        farmer_name: f,
        farmer_register: g,
        father_husband_name: h,
        mobile: i,
        aadhar: j,
        wife_husband_aadhar: k,
        reven_vill: l,
        own_agri_land: m,
        khata: n,
        khesra: o,
        rakwa: p,
        agri_implem: q,
        crops: r,
        dis_pmp: s,
        no_dis_pmp: t,
        elec_pmp: u,
        no_elec_pmp: v,
        kcc: w,
        benef_pm_kisan: x,
        payment_install: y
      }
    });
  }

  const string = (arr) => {
    let str = arr.toString();
    return str;
  }

  let sr = 1;

  const filteredfarmer = farmers.filter((farmr) => {
    if (panchayt === "ALL PANCH") {
      return farmers;
    }
    return farmr.panchayat.toLowerCase().includes(panchayt.toLocaleLowerCase())
  });

  const FarmerList = ({ filtered_farmer }) => {
    return (
      <div>
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
            <th>Agriculture Co-ordinator</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            filtered_farmer.filter(farmer => {
              if (query === '') {
                return farmer;
              } else if (farmer.farmer_name.toLowerCase().includes(query.toLowerCase())) {
                return farmer;
              } else if (farmer.mobile.includes(query)) {
                return farmer;
              } else if (farmer.aadhar.includes(query)) {
                return farmer;
              }
            }).map(farmer =>
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
                <td>{farmer.partner}</td>

                <td><button type="button" class="btn btn-primary" onClick={() => edit(
                  farmer._id,
                  farmer.partner,
                  farmer.panchayat,
                  farmer.block,
                  farmer.dist,
                  farmer.farmer_name,
                  farmer.farmer_register,
                  farmer.father_husband_name,
                  farmer.mobile,
                  farmer.aadhar,
                  farmer.wife_husband_aadhar,
                  farmer.reven_vill,
                  farmer.own_agri_land,
                  farmer.khata,
                  farmer.khesra,
                  farmer.rakwa,
                  farmer.agri_implem,
                  farmer.crops,
                  farmer.dis_pmp,
                  farmer.no_dis_pmp,
                  farmer.elec_pmp,
                  farmer.no_elec_pmp,
                  farmer.kcc,
                  farmer.benef_pm_kisan,
                  farmer.payment_install
                )}
                >Edit</button></td>
                <td><button type="button" class="btn btn-info" onClick={() => fulldet(
                  farmer._id,
                  farmer.partner,
                  farmer.panchayat,
                  farmer.block,
                  farmer.dist,
                  farmer.farmer_name,
                  farmer.farmer_register,
                  farmer.father_husband_name,
                  farmer.mobile,
                  farmer.aadhar,
                  farmer.wife_husband_aadhar,
                  farmer.reven_vill,
                  farmer.own_agri_land,
                  farmer.khata,
                  farmer.khesra,
                  farmer.rakwa,
                  farmer.agri_implem,
                  farmer.crops,
                  farmer.dis_pmp,
                  farmer.no_dis_pmp,
                  farmer.elec_pmp,
                  farmer.no_elec_pmp,
                  farmer.kcc,
                  farmer.benef_pm_kisan,
                  farmer.payment_install
                )} >Print</button></td>
              </tr>
            )}
        </tbody>
      </div>
    )
  }

  return (

    <div className="container home">

      <h3 className="p-3 text-center">Your Farmers</h3>

      <h5 className="p-3 text-center">Scroll right to Edit or Print</h5>

      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            {/* <label for="exampleInputEmail1"><strong>Panchayat:</strong></label> */}
            <select class="form-select" name="panchayt" id="panch" aria-label="Default select example" value={panchayt} onChange={(e) => setPanchayt(e.target.value)}>
              <option name="panchayt" value="ALL PANCH">ALL PANCHAYAT</option>
              <option name="panchayt" value="BABHANGAMA">BABHANGAMA</option>
              <option name="panchayt" value="LATTIPUR NORTH">LATTIPUR NORTH</option>
              <option name="panchayt" value="LATTIPUR SOUTH">LATTIPUR SOUTH</option>
              <option name="panchayt" value="BIHPUR EAST">BIHPUR EAST</option>
              <option name="panchayt" value="BIHPUR JAMALPUR">BIHPUR JAMALPUR</option>
              <option name="panchayt" value="BIHPUR SOUTH">BIHPUR SOUTH</option>
              <option name="panchayt" value="BIHPUR MIDDLE">BIHPUR MIDDLE</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div className="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search by Name" aria-label="Search" onChange={event => setQuery(event.target.value)} />
          </div>
        </div>
      </div>

      <table className="table example table-striped table-bordered" style={{ "display": "block", "overflow-x": "auto", "white-space": "nowrap" }}>
        <FarmerList filtered_farmer={filteredfarmer} />
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

export default Home;