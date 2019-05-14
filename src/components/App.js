import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { initialState } from '../initialState'

import { API } from './API'
import { Context } from '../contexts'
import { ResultsPage } from './ResultsPage'
import { SearchPage } from './SearchPage'

import { initializeIcons } from '@uifabric/icons';

initializeIcons();
const history = createBrowserHistory()

export const App = () => {
  const [state, setState] = React.useState(initialState)

  return (
    <div className="ms-Grid">
      <Context.Provider value={{ state, setState }}>
        <Router history={history}>
          <Route path='/' component={API} />

          <Switch>
            <Route exact path='/' component={SearchPage} />
            <Route path='/results' component={ResultsPage} />
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  )
}