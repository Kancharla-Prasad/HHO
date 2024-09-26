import React, { useState } from 'react'
import "./Login.css"
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };



  return (
    <div className='back-image login'>

      <img className="image" src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png" alt='..' />

      <form action='' className='login-form'>
        <h1 className='login-title'>Welcome to HHO</h1>
        <div className='login-content'>
          <div className='login-box'>
            <i className='ri-user-3-line login-icon'></i>
            <div className='login-box-input'>
              <input className='input login-input' type='email' required placeholder='' />
              <label className='login-label' htmlFor=''>Email</label>
            </div>
          </div>
          <div className='login-box'>
            <i className='ri-lock-2-line login-icon'></i>
            <div className='login-box-input'>
              <input className='input login-input' type={showPassword ? 'text' : 'password'} required placeholder='' id="login-pass"/>
              <label className='login-label' htmlFor=''>Password</label>
              <i  className={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} id='login-eye' onClick={togglePasswordVisibility}></i>
            </div>
          </div>
          <a href='#' className='login-forgot'>forget password?</a>
          <button className='login-btn'>Login</button>
        </div>
      </form>
    </div>

  )
}

export default LoginPage
