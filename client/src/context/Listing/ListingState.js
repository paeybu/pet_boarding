import React, { useReducer } from 'react'
import ListingContext from './listingContext'
import listingReducer from './listingReducer'
import firebase from 'firebase'

const ListingState = props => {
  const initialState = {
    firebaseApp: firebase.initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: 'pet-boarding-4c6a1',
      storageBucket: 'pet-boarding-4c6a1.appspot.com',
      messagingSenderId: '1001728767339',
      appId: '1:1001728767339:web:0c9eaa6a252b9e263f082e'
    })
  }

  const [state, dispatch] = useReducer(listingReducer, initialState)

  // Actions

  return (
    <ListingContext.Provider
      value={{
        firebaseApp: state.firebaseApp
      }}
    >
      {props.children}
    </ListingContext.Provider>
  )
}

export default ListingState
