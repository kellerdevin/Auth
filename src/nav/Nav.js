import React from 'react'
import { StackNavigator } from 'react-navigation'

import ProdPage from './ProdPage'

const routeConfig = {
  ProdPage: { screen: ProdPage },
}

const StackNav = StackNavigator(routeConfig)

class Nav extends React.Component {
  render() {
    return (
      <StackNav />
    )
  }
}

export default StackNav
