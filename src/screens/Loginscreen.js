import React, { useState } from "react";
import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  
   async function login() {
   
      const user = { email, password};
      try{

        setloading(true);
        const result = (await axios.post('/api/users/login', user)).data;
        setloading(false);

        localStorage.setItem('currentUser', JSON.stringify(result));
        window.location.href='/home'

      }catch(error){
        console.log(error);
        setloading(false);
        seterror(true);
      }
  
  }
  return (
    <div>
      {loading && (<Loader />)}
      <div className="row justify-content-center mt-5 text-center">
        <div className="col-md-3 mt-5">
          {error && (<Error message='Invalid Credentials' />)}
          <div className="bss">
            <h2>Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          
            <button className="btn btn-primary mt-3" onClick={login}>
              Login
            </button><br /><br />
            <p> <strong>Login as Admin</strong><br /> Username : test@gmail.com, Password : 123456</p>
            <p> <strong>Login as User</strong><br />Username : test1@gmail.com,<br /> Password : 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
