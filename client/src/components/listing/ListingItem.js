import React from 'react'
import { Link } from 'react-router-dom'

const ListingItem = ({ item }) => {
  return (
    <Link to={`/listing/${item.id}`}>
      <div className="card">
        <div className="card-image">
          <img src={item.images[0]} alt="Cover" />
        </div>
        <div className="card-content">
          <span className="card-title">{item.name}</span>
          <p>฿{item.price} / night</p>
        </div>
      </div>
    </Link>
  )
}

export default ListingItem
