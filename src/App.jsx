import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import BeerDetails from './Components/BeerDetails'
import styles from './App.module.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createContext } from 'react'

export const SearchContext = createContext({})
const App = () => {
  const {ispending, error, data} = useFetch('https://api.punkapi.com/v2/beers')

  const [ searchText, setSearchText] = useState('')
  

  const search = {
    searchText: searchText,
    setSearchText: setSearchText
  }

   
  return (
    <SearchContext.Provider value={search}>

    <Router>
      <Switch>

        <Route exact path='/'>
    <div>
      { ispending && <div>loading....</div> }
      { error && <div>{error}</div> }
      <div className={styles.wrapper}>
        <Navbar setSearchText={setSearchText}/>
        { data && <Main  data={data}/> }
      {/* <h2>{data}</h2> */}
      </div>
    </div>
        </Route>

      <Route path='/beers/:id'>
        <div className={styles.wrapper}>
          <BeerDetails/>
      </div>
      </Route>


      </Switch>
    </Router>
    </SearchContext.Provider>
  )
}

export default App
