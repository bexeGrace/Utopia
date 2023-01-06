import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollTop';
import { RoomContext } from '../context/RoomContext';
function SignInPage() {
  const {token, setToken, setLoggedIn} = useContext(RoomContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'customer'
  });

  const navigate = useNavigate()

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    const res = await sendData()
    if (res){
      alert('successful')
      navigate('/')
      setLoggedIn(true)
      // localStorage.setItem('token', token)
    }else {
      alert('Credentials Not Correct!')
      navigate('/signin')
    }
  };
  
  const sendData = async() => {
    const res = await fetch(`http://localhost:8000/user/login/${formData.userType}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    if (res.status !== 201){
      return false
    }else{
      const data = await res.json()
      const token = await data.token
      setToken(token)
      return true
    }
  }

  useEffect(()=>{
    const updateLocalStorage = () =>{
      localStorage.setItem('token', token)
    }
    updateLocalStorage()
  }, [token])

  return (
    <>
    <ScrollToTop/>
    
    <div className="container max-w-md w-full space-y-8 pt-40 mx-auto">
    <h1 className="text-2xl font-bold mb-4">Sign In</h1>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true" />
      
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      {/* Password Field */}
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
  
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6zm7 5a1 1 0 00-1-1H8a1 1 0 100 2h4a1 1 0 001-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
    <div className="text-center">
      <p className="text-gray-600 text-sm">
        Don't have an account? 
        <Link to="/signup" className="text-indigo-600 hover:underline"> Sign up here</Link>
      </p>
    </div>
  </div>
  </>
  );
}

export default SignInPage;



