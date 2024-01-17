import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigation from '../drawerNavigation/DrawerNavigation'

const Parent = () => {
  return (
    <View style={{flex: 1}}>
    <DrawerNavigation />
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})