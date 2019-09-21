import React, { useState, useEffect, useContext } from 'react'
import ListingContext from '../../context/Listing/listingContext'
import M from 'materialize-css'

const ListingDetail = ({ match }) => {
  const id = match.params.id
  const [item, setItem] = useState({
    images: [],
    location: {}
  })
  const [doc, setDoc] = useState(null)
  const listingContext = useContext(ListingContext)
  const { firebaseApp } = listingContext

  useEffect(() => {
    if (item.name === undefined) getDoc()
    // Init
    const carousel = document.querySelector('.carousel')
    M.Carousel.init(carousel, {
      fullWidth: true
    })
  }, [item])

  const getDoc = async () => {
    const db = firebaseApp.firestore()
    const ref = db.collection('listing').doc(id)
    const doc = await ref.get()
    setDoc(doc)
    const data = await doc.data()
    setItem(data)
  }
  return (
    <div>
      <h4>{item.name}</h4>
      {item.images.length > 0 && (
        <div className="carousel carousel-slider">
          {item.images.map(image => (
            <a className="carousel-item" key={doc.id}>
              <img src={image} />
            </a>
          ))}
        </div>
      )}
      <p>{item.location.amphoe}</p>
    </div>
  )
}

export default ListingDetail
