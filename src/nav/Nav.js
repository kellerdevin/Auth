import React from 'react'
import { StackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation';

import ProdPage from '../containers/ProdPage'
import BlockInfo from '../containers/BlockInfo'

const routeConfig = {
  ProdPage: { screen: ProdPage },
  BlockInfo: { screen: BlockInfo },
  
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
