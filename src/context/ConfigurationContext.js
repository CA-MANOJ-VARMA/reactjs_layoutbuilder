import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: '',
  showLeftNavbar: '',
  showRightNavbar: '',
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {},
})
export default ConfigurationContext
