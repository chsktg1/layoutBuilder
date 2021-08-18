import {Component} from 'react'

class Header extends Component {
  state = {}

  render() {
    return (
      <>
        <h1
          style={{
            backgroundColor: '#e2e8f0',
            height: '18vh',
            textAlign: 'center',
            paddingTop: '6vh',
          }}
        >
          Header
        </h1>
      </>
    )
  }
}

export default Header
