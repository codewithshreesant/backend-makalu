import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const holidays=[
  {
    "id":"kathmandu-chitwan-pokhara",
    "name":"kathmandu chitwan pokhara",
  },
  {
    "id":"3-nights-kathmandu",
    "name":"3-Nights-Kathmandu"
  },
  {
    "id":"kathmandu-chitwan",
    "name":"Kathmandu Chitwan"
  }
]

const boundTour=[
  {
    "id":"china-tour",
    "name":"China Tour",
  },
  {
    "id":"srilanka-tour",
    "name":"Srilanka Tour",

  },
  {
    "id":"usa-tour",
    "name":"USA Tour"
  },
  {
    "id":"australia-tour",
    "name":"Australia Tour"
  },
  {
    "id":"europe-tour",
    "name":"Europe Tour"
  },
  {
    "id":"singapore-tour",
    "name":"Singapore Tour"
  }
]

const Navbar = () => {
  let [showHolidays, setShowHolidays]=useState(false);
  let [showBoundTour, setBoundTour]=useState(false);

  const handleEvent=()=>{
      setShowHolidays(true);
  }

  const handleOut=()=>{
    setShowHolidays(false);
  }

  const handleBoundEnter=()=>{
    setBoundTour(true);
  }

  const handleBoundOut=()=>{
    setBoundTour(false);
  }

  return (
    <div className='h-[80vh]' style={{backgroundImage: "url('hero-image.jpg')", backgroundRepeat: 'no-repeat'}}>
    <div className='w-full flex list-none gap-[3rem] text-[1rem] text-white font-bold bg-blue-700 h-[6vh] items-center'>
      <div className='w-[20vw] flex justify-around'>
      <div>
        <li>
         <Link to='/'>Home</Link> 
        </li>
      </div>
      <div>
        <li>
         <Link to='/about'>About Us</Link> </li>
      </div>
      </div>
      <div onMouseEnter={handleEvent} className='cursor-pointer w-[15vw]'>
        <li>
         <Link>Nepal Holidays Packages</Link> </li>
        
      </div>
      <div onMouseEnter={handleBoundEnter} className='cursor-pointer'>
        <li>
         <Link>Out Bound Tour</Link> </li>
      </div>
      <div>
        <li>
         <Link to='/contact'>Contact Us</Link> </li>
      </div>
      <div>
        <li>
         <Link to='/tibet-tour'>Tibet Tours</Link> </li>
      </div>
      <div>
        <li>
         <Link to='/srilinka-tour'>Srilanka Tour</Link> </li>
      </div>
    </div>
    {showHolidays &&<div onMouseLeave={handleOut} className='absolute left-[22vw] bg-blue-700 font-bold text-white'> {
      holidays.map((element, index)=>{
        return <ul>
          <Link to={`singlePlace/${element.id}`}>{element.name}</Link> 
        </ul>
      })
    }</div>
    }
      {
          showBoundTour && <div onMouseLeave={handleBoundOut} className='absolute left-[42vw] bg-blue-700 font-bold text-white'>
            {
              boundTour.map((element, index)=>{
                return <ul>
                  <li>
                   <Link to={`singlePlace/${element.id}`}>{element.name}</Link> 
                  </li>
                </ul>
              })
            }
          </div>
        }
    </div>
  )
}

export default Navbar