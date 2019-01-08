import React from 'react'
import logo from './react.svg'

import * as styles from './Home.scss'

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to Razzles</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.tsx</code> or{' '}
          <code>src/Home.tsx</code> and save to reload.
        </p>
        <ul className={styles.resources}>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
