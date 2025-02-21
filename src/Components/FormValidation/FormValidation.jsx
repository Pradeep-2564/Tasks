import React, { useState } from 'react';
import './FormValidation.css'

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    
    setEmailError('');
    setPasswordError('');

    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      valid = false;
    }

    if (valid) {
      setEmail('');
      setPassword('');
      alert("Form is submitted success");
    }
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='content'>
          <h3 >My Form validation</h3>
          <div >
            <label>Email </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div><br />
          
          <div >
            <label>Password </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          </div><br />

          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default FormValidation;
