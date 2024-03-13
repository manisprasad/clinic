import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom';
import About from '../components/About/About.jsx';
import { BsArrowRight, } from 'react-icons/bs';
const Home = () => {
  return (
    <>
      {/* -------hero section-------- */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ---------hero section---------- */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text__para'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium natus ipsam a tempora quas doloribus enim, officiis, quasi numquam obcaecati voluptate laboriosam eos? Exercitationem delectus voluptas placeat dicta blanditiis reiciendis!
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>
              {/* ---------hero section---------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinics Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ---------hero section---------- */}

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                <img className='w-full' src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------hero section end-------- */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best medical services</h2>
            <p className="text-center text__para">povides the best care for everyone.</p>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30ppx] ppx-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <p className='text-center text-xl'>Your doctor here</p>
              <Link to="/doctors"
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>




            </div>



            <div className="py-[30ppx] ppx-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <p className='text-center text-xl'>Location</p>
              <Link to="/location"
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>




            </div>


            <div className="py-[30ppx] ppx-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <p className='text-center text-xl'>Book Appointment</p>
              <Link to="/doctors"
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* -----about section start here----- */}
      
        <About />
      
      {/* -----about section end here----- */}


{/* services section start here */}
{/* services section end here */}
    </>
  )
}

export default Home