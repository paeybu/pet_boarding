import React, { useEffect, useState, useContext } from 'react'
import ListingItem from './ListingItem'
import ListingContext from '../../context/Listing/listingContext'

const Listings = () => {
  const [listings, setListings] = useState([])
  const listingContext = useContext(ListingContext)
  const { firebaseApp } = listingContext
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const fetchData = async () => {
    const db = firebaseApp.firestore()
    const res = await db.collection('listing').get()
    res.docs.forEach(doc => {
      const data = doc.data()
      setListings(old => [
        ...old,
        {
          id: doc.id,
          ...data
        }
      ])
    })
  }
  return (
    <div className="row">
      <div className="col s12">
        {listings.map(item => (
          <ListingItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Listings
