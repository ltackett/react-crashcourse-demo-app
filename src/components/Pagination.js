import React from 'react'
import cx from 'classnames'
import { Context } from '../contexts'

export const Pagination = (props) => {
  const { state, setState } = React.useContext(Context)
  const { page } = state

  // If there are no pages, render nothing
  if (!state.pages) {
    return null
  }

  // Create empty array and fill it with page numbers
  const pages = Array(state.pages).fill(0).map((n, i) => i+1)

  // Match if there is no page
  const isActive = (p, i) => { return page ? p === page : i === 0 }

  return (
    <ul className="pagination">
      {pages.map((p, i) =>
        <li key={`page-${p}`}>
          <a
            href={`#page-${p}`}
            className={cx({ 'active': isActive(p, i) })}
            onClick={() => setState({ ...state, page: p })}
          >
            {p}
          </a>
        </li>
      )}
    </ul>
  )
}
