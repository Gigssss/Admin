import React from "react";

function loginInput() {
  return (
    <form className="container-login">
          <div className='judul-login'>
            <h1>Login</h1>
            <p>Please Login to continue into the application</p>
          </div>
          <div className="input-login">
            <input type="email" className="kolom-email" name="email" placeholder="Email" />
            <input type="password" className="kolom-pass-login" name="password" placeholder="Password" />
          </div>
        <button className="btn-login" type="button">Login</button>
    </form>
  );
}


export default loginInput;
