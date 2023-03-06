// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent)
      console.log(showLeftNavbar)
      console.log(showRightNavbar)
      return (
        <div className="css-body-bg-container">
          {showLeftNavbar && (
            <div className="css-leftnavbar-container">
              <h1>Left Navbar Menu</h1>

              <ul className="css-leftbar-list-container">
                <li>
                  <p>Item 1</p>
                </li>
                <li>
                  <p>Item 2</p>
                </li>
                <li>
                  <p>Item 3</p>
                </li>
                <li>
                  <p>Item 4</p>
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="css-content-container">
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="css-rightnavbar-container">
              <h1>Right Navbar Menu</h1>
              <div>Ad 1</div>
              <div>Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
