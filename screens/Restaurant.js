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
import { ClipPath } from 'react-native-svg'

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
              <View style={{ height: SIZES.height * 0.35}}>
                {/* Food image */}
                <Image 
                  source={item.photo}
                  resizeMode='cover'
                  style={{
                    width: SIZES.width,
                    height: '100%'
                  }}
                />

                {/* Quantity */}
                <View
                  style={{
                    position: 'absolute', 
                    bottom: -5, 
                    width: SIZES.width, 
                    height: 50, 
                    justifyContent: 'center',
                    flexDirection: 'row', 
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 50, 
                      backgroundColor: COLORS.white, 
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopLeftRadius: 25, 
                      borderBottomLeftRadius: 25, 
                      
                    }}
                  >
                    <Text style={{...FONTS.body1}}>-</Text>
                  </TouchableOpacity>
                  <View style={{
                    width: 50, 
                    backgroundColor: COLORS.white, 
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Text style={{...FONTS.h2}}>5</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 50, 
                      backgroundColor: COLORS.white, 
                      alignItems: 'center',
                      justifyContent: 'center', 
                      borderTopRightRadius: 25, 
                      borderBottomRightRadius: 25,
                    }}
                  >
                  </TouchableOpacity>
                </View>
              </View>

              {/* name and description */}
              <View
                style={{
                  width: SIZES.width, 
                  alignItems: 'center',
                  marginTop: 15, 
                  paddingHorizontal: SIZES.padding * 2, 

                }}
              >
                <Text
                  style={{
                    marginVertical: 10, 
                    textAlign: 'center',
                    ...FONTS.h2
                  }}
                >
                  {item.name} - ${item.price.toFixed(2)}
                </Text>
                <Text style={{...FONTS.body3}}>
                  {item.description}                
                </Text>              
              </View>

              {/* calories */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                }}
              >
                <Image 
                  source={icons.fire}
                  style={{
                    width: 20, 
                    height: 20, 
                    marginRight: 10, 
                  }}
                />
                <Text
                  style={{...FONTS.body3, color: COLORS.darkgray}}
                >{item.calories.toFixed(2)} cal</Text>
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