import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import Notification from './screens/notification/Notification';


const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
