// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const contentFunction = () => {
        onToggleShowContent()
      }

      const leftnavabarFunction = () => {
        onToggleShowLeftNavbar()
      }
      const rightnavabarFunction = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="css-configurationcontroller-container">
          <h1>Layout</h1>
          <ul className="css-ul-checkbox-container">
            <li>
              <div className="css-checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  onChange={contentFunction}
                  checked={showContent && `checked`}
                />
                <label htmlFor="content">Content</label>
              </div>
            </li>
            <li>
              <div className="css-checkbox-container">
                <input
                  type="checkbox"
                  id="Left Navbar"
                  onChange={leftnavabarFunction}
                  checked={showLeftNavbar && `checked`}
                />
                <label htmlFor="Left Navbar">Left Navbar</label>
              </div>
            </li>
            <li>
              <div className="css-checkbox-container">
                <input
                  type="checkbox"
                  id="Right Navbar"
                  onChange={rightnavabarFunction}
                  checked={showRightNavbar && `checked`}
                />
                <label htmlFor="Right Navbar">Right Navbar</label>
              </div>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
