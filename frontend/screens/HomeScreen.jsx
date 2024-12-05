import { View, Text,Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
       <Image source={require('../assets/logo.png')} />
       <Image source={require('../assets/search_icon.png')}/>
    </View>
  )
}

export default HomeScreen