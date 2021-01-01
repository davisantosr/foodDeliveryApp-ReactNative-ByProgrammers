import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  View, 
  Text,
} from 'react-native'

import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const Restaurant = ({route}) => {

  const [ restaurant, setRestaurant ] = React.useState(null)
  const [ currentLocation, setCurrentLocation ] = React.useState(null)

  React.useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurant(item)
    setCurrentLocation(currentLocation)
  })

  return (
    <SafeAreaView>
      {renderHeaeder()}
    </SafeAreaView>
  )
}

export default Restaurant;