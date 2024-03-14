import React from 'react'
import { useState } from 'react'
import "../components/glass.css"
import { Link } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => { 
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }



  return <section className='px-5 lg:px-0 bg-gray-300'>
    <div className='w-full glass  mx-auto max-w-[570px] max-auto rounded-lg shadow-md md:p-10'>
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-5'>Hello <span className='text-primaryColor'>Welcome </span>back
      🎉</h3>

      <form action="" className='py-2 md:py=0  '>
        <div className="mb-5">
          <label htmlFor="emailid" className='font-semibold text-textColor'>Email</label>
          <input 
          className='w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primaryColor'
          type="email" 
          name="email"
          placeholder='Enter the email' 
          value={formData.email}
          id='emailid'
          required
          onChange={handleInputChange} />
         
        </div>



        <div className="mb-5">
          <label htmlFor="passwordid" className='font-semibold text-textColor'>Password</label>
          <input 
          className='w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primaryColor'
          type="password" 
          name="password"
          placeholder='Enter the password' 
          value={formData.password}
          id='passwordid'
          required
          onChange={handleInputChange} />
          
        </div>


        <div className="mt-7">
          <button type="submit" className='w-full text-white bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>
        </div>

        <p className='mt-5 text-textColor text-center'>
          Don&apos;t have an account? <Link to='/register' className='text-primaryColor ml-2'>Register</Link>
        </p>
      </form>

    </div>
  </section>
}

export default Login