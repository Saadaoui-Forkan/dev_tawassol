import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
// import axios from 'axios'
import { alertActions } from '../../redux/slices/alertSlice'

function Register() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      const error = {
        id: new Date().getTime(),
        type: "danger",
        msg:"Passwords does not mutch"
      };
      dispatch(alertActions.setAlerts(error))
      setTimeout(()=> dispatch(alertActions.removeAlert(error)), 3000)
    }    
    console.log("success")
  }
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <form 
        className="form" 
        onSubmit={e => onSubmit(e)}
      >
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={e => onChange(e)}
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email"  
            value={email}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password" 
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2" 
            value={password2}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input 
          type="submit" 
          className="btn btn-primary" 
          value="Register" 
        />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
}

export default Register;
