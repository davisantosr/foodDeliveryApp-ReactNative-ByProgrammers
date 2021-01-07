import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  View, 
  Text,
  Alert,
} from 'react-native'

import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const Restaurant = ({route, navigation}) => {

  const [ restaurant, setRestaurant ] = React.useState(null)
  const [ currentLocation, setCurrentLocation ] = React.useState(null)

  React.useEffect(() => {
    let item = route.params?.item
    let currentLocation = route.params?.currentLocation
    setRestaurant(item)
    setCurrentLocation(currentLocation)
        
  },[route.params])

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row'}}>

        {/* back icon */}

        <TouchableOpacity
          style={{
            width: 50,
             paddingLeft: SIZES.padding *2,
             justifyContent: 'center'
          }}
          onPress={() => navigation.goBack()}
        >
          <Image 
            source={icons.back}
            resizeMode='contain'
            style={{
              width: 30, 
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* Restaurant Name */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3, 
              borderRadius: SIZES.radius, 
              backgroundColor: COLORS.lightGray3
            }}
          >
            <Text style={{...FONTS.h3}}> {restaurant?.name }</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50, 
            paddingRight: SIZES.padding*2, 
            justifyContent: 'center'
          }}
        >
          <Image 
            source={icons.list}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30
            }}
          />

        </TouchableOpacity>
      </View>
    )
  }

  function renderFoodInfo() {
    console.log(restaurant?.menu)
    return (
      
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        // onScroll={}
      >
        
        {
          restaurant?.menu.map((item, index) => {
            return (
            <View
              key={`menu-${index}`}
              style={{alignItems: 'center'}}
            >
              <View style={{ height: 100}}>
                {/* Food image */}
                <Image 
                  source={item.photo}
                  resizeMode='cover'
                  style={{
                    width: 100,
                    height: 100
                  }}
                />
              </View>
            </View>
          )})
        }
        
      </Animated.ScrollView>

    )
  }

  return (
    <SafeAreaView style={styles.container} >
      {renderHeader()}
      {renderFoodInfo()}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray2,

  }
})

export default Restaurant;