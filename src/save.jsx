import React from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Dragon Surf</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Display Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up!</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
