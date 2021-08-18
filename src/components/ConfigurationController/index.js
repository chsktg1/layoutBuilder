// Write your code here
import {Component} from 'react'

import Layout from '../Layout'

import ConfigurationContext from '../../context/ConfigurationContext'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavBar: true, showRightNavBar: true}

  onToggleShowContent = () => {
    this.setState(p => ({showContent: !p.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(p => ({showLeftNavBar: !p.showLeftNavBar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(p => ({showRightNavBar: !p.showRightNavBar}))
  }

  render() {
    const {showContent, showLeftNavBar, showRightNavBar} = this.state
    console.log('hel')

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavBar,
          showRightNavBar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <>
          <h1>Layout</h1>
          <form style={{padding: '20px'}}>
            <input
              checked={showContent}
              onChange={this.onToggleShowContent}
              id="Content"
              type="checkbox"
            />
            <label htmlFor="Content">Content</label>

            <br />
            <input
              checked={showLeftNavBar}
              onChange={this.onToggleShowLeftNavbar}
              id="LNav"
              type="checkbox"
            />
            <label htmlFor="LNav">Left Navbar</label>

            <br />
            <input
              checked={showRightNavBar}
              onChange={this.onToggleShowRightNavbar}
              id="RNav"
              type="checkbox"
            />
            <label htmlFor="RNav">Right Navbar</label>

            <br />
          </form>
          <Layout />
        </>
      </ConfigurationContext.Provider>
    )
  }
}

export default ConfigurationController
