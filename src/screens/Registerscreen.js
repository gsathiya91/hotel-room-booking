import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import { Link } from "react-router-dom";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();

  async function register() {
    if (password === cpassword) {
      const user = { name, email, password, cpassword };
      try {
        setloading(true);
        const result = (await axios.post("/api/users/register", user)).data;
        setloading(false);
        setsuccess(true);
        setname('')
        setemail('')
        setpassword('')
        setcpassword('')
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(true);
      }
    } else {
      alert("Password didn't match");
    }
  }
  return (
    <div>
      {loading && (<Loader />)}
      {error && (<Error />)}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {success && (<Success message='Registration success' />)}
          <div className="bss">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Confirm password"
              value={cpassword}
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            /><br />
            <button className="register" onClick={register}>
              Register
            </button>&nbsp;&nbsp;
            <Link to='/login' className='click'>Already Registered ? Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
