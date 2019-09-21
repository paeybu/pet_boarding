import React from 'react'
import { Link } from 'react-router-dom'
import Listings from '../components/listing/Listings'

const Listing = () => {
  return (
    <div>
      <h1>Listing</h1>
      <Link to="/listing/new">Add new listing</Link>
      <Listings />
    </div>
  )
}

export default Listing
