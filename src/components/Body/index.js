// Write your code here
import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const LeftNavBar = () => (
  <div style={{border: '2px solid black'}}>
    <h1>Left Navbar Menu</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </div>
)

const RightNavBar = () => (
  <div style={{border: '2px solid black'}}>
    <h1>Right Navbar</h1>
    <div>
      <p>Ad 1</p>
    </div>
    <div>
      <p>Ad 2</p>
    </div>
  </div>
)

const Content = () => (
  <div>
    <h1>Content</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </p>
  </div>
)

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavBar, showRightNavBar} = value
          console.log(showContent)

          return (
            <div className="bodyContainer">
              {showLeftNavBar ? <LeftNavBar /> : null}
              {showContent ? <Content /> : null}
              {showRightNavBar ? <RightNavBar /> : null}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
