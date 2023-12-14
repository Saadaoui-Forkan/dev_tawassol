import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/apiCall/authApiCall';

  function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const { email, password } = formData
  
    const onChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const onSubmit = async e => {
      e.preventDefault()
      dispatch(loginUser(formData))
      if (auth.user) {
        navigate('/')
      }
    }
  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
}

export default Login;