import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import M from 'materialize-css'
import NewForm from './NewForm'

const New = () => {
  // States
  const [files, setFiles] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [location, setLocation] = useState({
    number: '',
    moo: '',
    soi: '',
    street: '',
    tambon: '',
    amphoe: '',
    province: ''
  })
  const [images, setImages] = useState([])
  const [accept, setAccept] = useState([])

  // Use effect
  useEffect(() => {
    if (images.length !== 0 && files.length === images.length) {
      addListing()
    }
    // eslint-disable-next-line
  }, [images])

  // Upload to firestore

  const addListing = async () => {
    // Upload to firestore
    const db = firebase.firestore()
    let ref = await db.collection('listing').add({
      name,
      price,
      location,
      images,
      accept
    })
    M.toast({ html: `added ${ref.id}` })
    //@todo do images and accept
  }

  // Upload to storage
  const onSubmit = async e => {
    e.preventDefault()

    // Check for file
    if (files.length === 0) {
      M.toast({ html: 'Need a valid file' })
      return
    }

    // Loop through file list and upload it to storage, then get the download url and add to images array
    Array.from(files).map(async file => {
      const storageRef = firebase.storage().ref()
      const image = storageRef.child(file.name)
      const snapshot = await image.put(file)
      const dlUrl = await snapshot.ref.getDownloadURL()
      setImages(old => [...old, dlUrl])
    })
  }

  const onChange = e => {
    const { type, checked, name } = e.target
    // If file
    if (type === 'file') {
      setFiles(e.target.files)
      // If checkbox
    } else {
      if (checked) {
        setAccept([...accept, name])
      } else {
        const index = accept.findIndex(item => item === name)
        const newAccept = [...accept]
        newAccept.splice(index)
        setAccept(newAccept)
      }
    }
  }

  return (
    <div>
      <h1>Listing</h1>
      <NewForm
        onSubmit={onSubmit}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        location={location}
        setLocation={setLocation}
        onChange={onChange}
      />
    </div>
  )
}

export default New
