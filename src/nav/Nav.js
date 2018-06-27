import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TabNavigator } from 'react-navigation'
import { Image, StyleSheet } from 'react-native'

import { colors, fonts } from '../theme'
import ProdPage from '../containers/ProdPage'
import BlockInfo from '../containers/BlockInfo'

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})

const routes = {
  ProdPage: {
    screen: ProdPage,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  },
  BlockInfo: {
    screen: BlockInfo,
    navigationOptions: {
      title: 'BlockInfo',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signUpButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  }
}

const routeConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    indicatorStyle: { backgroundColor: colors.secondary },
    labelStyle: {
      fontFamily: fonts.base,
      fontSize: 12
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      paddingBottom: 3
    },
  }
}

export default TabNavigator(routes, routeConfig)
