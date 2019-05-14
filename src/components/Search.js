import React from 'react'
import { Context } from '../contexts'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown'

const options = [
  { key: 'people', text: 'People' },
  { key: 'planets', text: 'Planets' },
  { key: 'species', text: 'Species' },
  { key: 'starships', text: 'Starships' },
  { key: 'vehicles', text: 'Vehicles' },
]


export const Search = () => {
  const { state, setState } = React.useContext(Context)

  const handleSearch = () => {
    setState({ ...state, url: `https://swapi.co/api/${state.searchResource}/?search=${state.searchTerm}`})
  }

  return (
    <div className="ms-Grid-row" style={{ maxWidth: 500}}>
      <TextField
        className="ms-Grid-col ms-lg6"
        onChange={(e) => setState({ ...state, searchTerm: e.target.value })}
      />

      <Dropdown
        className="ms-Grid-col ms-lg3"
        defaultSelectedKey="people"
        options={options}
        onChange={(e, o) => setState({ ...state, searchResource: o.key })}
      />
      
      <PrimaryButton
        className="ms-Grid-col ms-lg3"
        onClick={handleSearch}
        disabled={state.searchStatus === 'searching'}
      >
        {state.searchStatus === 'searching' ? 'Searching...' : 'Search'}
      </PrimaryButton>
    </div>
  )
}