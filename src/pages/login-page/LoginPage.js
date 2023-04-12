/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/image/login-page.png';
import LoginInput from '../../components/Login/LoginInput';

function LoginPage() {
  return (
    <>
      <form className='container-loginpage'>
        <LoginInput />
        <div className='img-login'>
          <img src={LoginImg}  width="1200" height="900" />
        </div>
      </form>
    </>
  );
}

export default LoginPage;