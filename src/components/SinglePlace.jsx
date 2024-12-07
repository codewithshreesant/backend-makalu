import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePlace = () => {
    const {id}=useParams();
  return (
    <div>
        <h1>SinglePlace</h1>
        <p>{id}</p>
    </div>
  )
}

export default SinglePlace