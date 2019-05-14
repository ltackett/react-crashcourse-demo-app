import React from 'react'
import { initialState } from '../initialState'
import { Context } from '../contexts'
import { Results } from './Results'
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
      <header>
        <p>
          You searched for: "{state.searchTerm}"
          <ActionButton
            onClick={() => setState(initialState)}
            iconProps={{ iconName: 'Cancel' }}
            style={{ marginTop: -8}}
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
  )
}