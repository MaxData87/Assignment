import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabNavigation from '../../bottomNavigator/BottomTabNavigation'

const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabNavigation />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})