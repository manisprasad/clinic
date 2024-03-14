import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import "../components/glass.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    terms: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className="mx-auto max-w-[1170px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='rounded-l-lg w-full' />
            </figure>
          </div>
          <div className="py-10 lg:pl-16 rounded-l-lg">
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'>account </span>
              <span className='text-red-400'>(for patient only)</span>
            </h3>
            <form className='space-y-5' onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className='text-gray-500'>Full Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Enter your full name'
                  className='border-b border-gray-300 p-2 glass rounded-sm focus:outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className='text-gray-500'>Email</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email'
                  className='border-b p-2 border-gray-300 glass rounded-sm focus:outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className='text-gray-500'>Password</label>
                <input
                  type="password"
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder='Enter your password'
                  className='border-b p-2 border-gray-300 glass rounded-sm focus:outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="confirmPassword" className='text-gray-500'>Confirm Password</label>
                <input
                  type="password"
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder='Confirm your password'
                  className='border-b p-2 border-gray-300 glass rounded-sm focus:outline-none'
                />
              </div>
              <div className="flex items-center space-x-3">
                <label htmlFor="gender" className='text-textColor'>
                  Gender:
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='ml-4 text-textColor'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={() => setFormData({ ...formData, terms: !formData.terms })}
                  className='text-primaryColor'
                />
                <label htmlFor="terms" className='text-gray-500'>I agree to the terms and conditions</label>
              </div>
              <button type="submit" className='bg-primaryColor text-white py-3 rounded-md w-full'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
