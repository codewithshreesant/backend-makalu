import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPackages } from '../features/packages/packageSlice';
import { Link } from 'react-router-dom';
const InboundTour = () => {

  let [data, setData]=useState([]);

  // const data=useSelector((state)=>state.packages.BookNowPackages);
  // const dispatch=useDispatch();
  // console.log("booknowpackages ", data);

  // const handleAddPackge=()=>{
  //   dispatch(addPackages({name:"Tushant"}))
  // }

  let [placeName, setPlaceName]=useState("choose a Place");

  useEffect(()=>{
    fetch('/MakaluTravel.json')
    .then((datas)=>{return datas.json()})
    .then((actualdatas)=>setData(actualdatas))
  }, [])

  const filteredData=placeName === "choose a Place" ? data : data.filter((place)=>{
    return place.placeName === placeName;
  })

  return (
    <div>
        <h1>Inbound Tour</h1>
        <select name="" id="" onChange={(e)=>setPlaceName(e.target.value)}>
          <option value="choose a place">choose a place</option>
          <option value="Gosaikunda">Gosaikunda</option>
          <option value="Kailash Mansarovar Tour">Kailash Mansarovar Tour</option>
          <option value="Kathmandu-Chitwan">Kathmandu-Chitwan</option>
          <option value="Kathmandu-Chitwan-Pokhara">Kathmandu-Chitwan-Pokhara</option>
          <option value="ktm-Pokhara-Jomsom">ktm-Pokhara-Jomsom</option>
        </select>
        {
          data && filteredData.map((element, index)=>{
            return <div>
              <h1>{element.placeName}</h1>
              <p>{element.description}</p>
              <img src={element.coverImage} alt="not found" />
              <div>
                <button>
                 <Link to={`/BookNow/${element.placeName}`}>Book Now</Link> 
                </button>
                <button>
                 <Link>Read More</Link> 
                </button>
              </div>
            </div>
          })

        }
        {/* <button onClick={handleAddPackge}>add Package</button> */}
    </div>
  )
}

export default InboundTour
