import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Listing from './page/Listing'
import New from './components/listing/New'
import ListingDetail from './components/listing/ListingDetail'
import Navbar from './components/layout/Navbar'
import ListingState from './context/Listing/ListingState'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <ListingState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Listing} />
            <Route exact path="/listing/new" component={New} />
            <Route exact path="/listing/:id" component={ListingDetail} />
          </Switch>
        </div>
      </Router>
    </ListingState>
  )
}

export default App
