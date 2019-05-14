/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import { isValidURL } from '../isValidURL'
import { Context } from '../contexts'

export const API = (props) => {
  const { state, setState } = React.useContext(Context)

  // Effect to:
  //   1. Listen for changes to state.url and state.page
  //   2. Fetch data from the API (optionally add the current page)
  //   3. Handle success
  //   4. Catch errors
  React.useEffect(() => {
    // If there's no URL, or the URL is invalid, exit
    if (state.url === '' || !isValidURL(state.url)) {
      return
    }
    
    // Trigger a fetch
    setState({ ...state, searchStatus: 'searching'})
    fetch(`${state.url}${state.page ? `&page=${state.page}` : ''}`)
      .then((res) => {
        res.json().then(data => {
          let pages
          if (data.count > 10) {
            pages = Math.ceil(data.count / 10)
          }
  
          // Put the data into app state
          setState({ ...state, data, pages, searchStatus: 'complete' })
  
          // ... and redirect
          if (props.location.pathname === '/') {
            props.history.push('/results')
          }
        })
      })
  
      .catch(() => {
        setState({ ...state, searchStatus: 'error'})
        throw new Error()
      })
  }, [state.url, state.page])

  return null
}