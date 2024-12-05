import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <View>
        <Image source={require('../assets/logo.png')} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})