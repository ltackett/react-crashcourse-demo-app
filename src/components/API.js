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
    if (!isValidURL(state.url)) {
      return
    }
    
    async function searchAsync()
    {
      setState({ ...state, searchStatus: 'searching'})

      try 
      {
        const res = await fetch(`${state.url}${state.page ? `&page=${state.page}` : ''}`);
        const data = await res.json();
        
        let pages = Math.ceil(data.count / 10)
       
        // Put the data into app state
        setState((currentState) => { return { ...currentState, data, pages, searchStatus: 'complete' }})

          // ... and redirect
        if (props.location.pathname === '/') 
        {
          props.history.push('/results')
        }
      } 
      catch(err)
      {
        setState({ ...state, searchStatus: 'error'})
        throw err
      }
    }

    searchAsync();
  }, [state.url, state.page])

  return null
}