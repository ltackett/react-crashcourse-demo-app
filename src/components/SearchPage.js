import React from 'react'
import { Search } from './Search'

export const SearchPage = (props) => {
  return (
    <header>
      <p>Search the Star Wars API</p>
      <Search {...props} />
    </header>
  )
}