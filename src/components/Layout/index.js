// Write your code here
import {Component} from 'react'
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="css-layout-bg-container">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout
