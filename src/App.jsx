import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import TheMenu from './Components/Menu'
import BeerDetails from './Components/BeerDetails'
import Favs from './Components/Favs'
import styles from './App.module.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createContext } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import UserContex from './context/UserContex'
import CrudContext from './context/CrudContext'

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 600,
  }
})

export const SearchContext = createContext({})
export const AcidFilter = createContext({})
export const abvFilter = createContext({})
const App = () => {
  const {ispending, error, data} = useFetch('https://api.punkapi.com/v2/beers')

  const [ searchText, setSearchText] = useState('')
  const [acidity, setAcidity] = useState(false)
  const [abvCheck, setabvCheck] = useState(false)
  
  const search = {
    searchText: searchText,
    setSearchText: setSearchText
  }
  const acid = {
    acidity: acidity,
    setAcidity: setAcidity
  }
  const abv = {
    abvCheck: abvCheck,
    setabvCheck: setabvCheck,
  }

  

   
  return (
    <ThemeProvider theme={theme}>
      <UserContex>
        <CrudContext>
    <SearchContext.Provider value={search}>
      <AcidFilter.Provider value={acid}>
        <abvFilter.Provider value={abv}>

    <Router>
      <Switch>

        <Route exact path='/'>
    <div>
      { ispending && <div>loading....</div> }
      { error && <div>{error}</div> }
      <div>
        <TheMenu />
      </div>
      <div className={styles.wrapper}>
        <Navbar setSearchText={setSearchText}/>
        { data && <Main  data={data}/> }
      {/* <h2>{data}</h2> */}
      </div>
    </div>
        </Route>

      <Route path='/beers/:id'>
        <TheMenu />
        <div className={styles.wrapper}>
          <BeerDetails/>
      </div>
      </Route>

      <Route path='/favs'>
        <TheMenu />
        <div className={styles.wrapper}>
        <Favs />
        </div>
      </Route>


      </Switch>
    </Router>
    </abvFilter.Provider>
    </AcidFilter.Provider>
    </SearchContext.Provider>
     </CrudContext>
    </UserContex>
    </ThemeProvider>
  )
}

export default App
