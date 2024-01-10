// // const loginText = document.querySelector(".title-text .login");
// // const loginForm = document.querySelector("form.login");
// // const loginBtn = document.querySelector("label.login");
// // const signupBtn = document.querySelector("label.signup");
// // const signupLink = document.querySelector("form .signup-link a");
// // signupBtn.onclick = (()=>{
// //  loginForm.style.marginLeft = "-50%";
// //  loginText.style.marginLeft = "-50%";
// // });
// // loginBtn.onclick = (()=>{
// //  loginForm.style.marginLeft = "0%";
// //  loginText.style.marginLeft = "0%";
// // });
// // signupLink.onclick = (()=>{
// //  signupBtn.click();
// //  return false;
// // });
// +

jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [marginLeft, setMarginLeft] = useState('0%');

  const handleSignupClick = () => {
    setMarginLeft('-50%');
  };

  const handleLoginClick = () => {
    setMarginLeft('0%');
  };

  const handleSignupLinkClick = () => {
    handleSignupClick();
    return false;

  };

  return (
    <div>
      <div className="title-text">
        <label className="login">Login</label>
      </div>
      <form className="login" style={{ marginLeft }}>
        {
        
        
        /* Your login form fields */
        
        
        
        }
      </form>
      <label className="signup" onClick={handleSignupClick}>Signup</label>
      <form>
        <div className="signup-link">
          <a href="#" onClick={handleSignupLinkClick}>Signup</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

