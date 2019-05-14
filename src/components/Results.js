import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts'
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';


export const Results = (props) => {
  const { state } = React.useContext(Context)

  // No results
  if (state.data && state.data.count === 0) {
    return (
      <>
        <p>No results.</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/41vF85HEiML.jpg" alt="No results." />
      </>
    )
  }

  // Get page from router params
  const { page } = state

  // Create lower and upper values for results on current page
  const lower = 10 * (page ? page - 1 : 0) + 1
  let upper = lower + 9
  
  // Boundary condition to prevent last page from reading wrong value
  if (state.data && state.data.count && upper > state.data.count) {
    upper = state.data.count
  }

  return (
    <div style={{ minHeight: 260 }}>
      {state.searchStatus === 'searching' ? (
        <div style={{ maxWidth: 320, paddingTop: 100 }}>
          <Spinner label="Loading..." />
        </div>
      ) : (
        <>
          <p>Showing {lower} - {upper} results out of {state.data && state.data.count}</p>
          <ul>
            {state.data && state.data.results && state.data.results.map((result) => {
              const resultUrl = result.url.replace('https://swapi.co/api', '')
              
              return (
                <li key={result.name}>
                  <Link to={resultUrl} url={result.url}>
                    {result.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}