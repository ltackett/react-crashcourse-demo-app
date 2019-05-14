import React from 'react'
import { initialState } from '../initialState'
import { Route } from 'react-router'
import { Context } from '../contexts'
import { Results } from './Results'
import { ResultPage } from './ResultPage'
import { Pagination } from './Pagination'
import { ActionButton } from 'office-ui-fabric-react/lib/Button';


export const ResultsPage = (props) => {
  const { state, setState } = React.useContext(Context)

  // Redirect if there's no data
  React.useEffect(() => {
    if (!state.data) {
      props.history.push('/')
    }
  })

  return (
    <>
    <Route exact path='/results' render={(routeProps) => (
      <>
        <header>
          <p>
            You searched for: "{state.searchTerm}"
            <ActionButton
              onClick={() => setState(initialState)}
              iconProps={{ iconName: 'Cancel' }}
              style={{ marginTop: -8, marginLeft: 100 }}
            >
              Clear Search
            </ActionButton>
          </p>
        </header>
        <main>
          <Results {...props} />
          <Pagination {...props} />
        </main>
      </>
    )} />
  </>
  )
}