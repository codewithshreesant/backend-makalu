import React from 'react'
import InboundTour from './InboundTour'

const Home = () => {
  return (
    <div>
      <div className='w-full flex justify-center my-20'>
        <div className='w-[40vw]'>
          <h1 className='text-3xl font-bold'>Why Book with us?</h1>
          <ul>
            <li>&#x2713; 25 Years of Experience</li>
            <li>&#x2713; More than 50% Repeated Customers</li>
            <li>&#x2713; Team of Experts</li>
            <li>&#x2713; Ultimate Value</li>
            <li>&#x2713; Competitive Prices</li>
            <li>&#x2713; 99% Success Rate</li>
            <li>&#x2713; Best Customer Service</li>
          </ul>
        </div>
        <div className='w-[50vw]'>
          <h1 className='text-3xl font-bold'>Welcome To <span className='text-blue-700'>Makalu Adventure Travels & Tours</span></h1>
          <p>Makalu Adventure is a pioneer tour operator and holiday planner offering the best of Holidays in Asia, Europe, Austraila. Our concept is to create the experience of a lifetime - of learning and discovery. Based on our many years of practice and expertise of arranging holidays, all of our tours are designed to create an exhilarating but relaxing experience to afford a refreshing break from the often busy and hectic lives that most people go through when not on vacation.</p>
        </div>
      </div>
      <InboundTour />
    </div>
  )
}

export default Home