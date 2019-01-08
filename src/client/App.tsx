import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'

import './App.scss'

const App = () => (
  <React.StrictMode>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </React.StrictMode>
)

export default App
