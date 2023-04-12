import React from 'react';
import SideBar from '../../components/sidebar/Sidebar';
import Notif from '../../components/notif/Notif';

const RegisterUserPage = () => {
  return (
    <>
    <SideBar>
    <Notif />
      <form className='container-regis'>
        <div className='judul-regis'>
          <h1>Register</h1>
          <p>Create your account</p>
        </div>
        <div className='form-regis'>
          <input type="text" name="fullname" className="colom-name" placeholder="FullName" />
          <input type="text" name="email" className="colom-email" placeholder="Email" />
          <div className='colom-justify'>
            <input type="text" name="position" className="colom-position" placeholder="Position" />
            <input type="text" name="department" className="colom-department" placeholder="Departement" />
          </div>
            <input type="text" name="role" className="colom-role" placeholder="Role" />
            <input type="text" name="password" className="colom-password" placeholder="Password" />
            <button className="btn-regis">Register</button>
        </div>
      </form>
    </SideBar>
    </>
  );
};

export default RegisterUserPage;