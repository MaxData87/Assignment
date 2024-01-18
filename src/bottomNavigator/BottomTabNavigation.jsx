import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Report from '../screens/report/Report';
import Profile from '../screens/profile/Profile';
import home from '../../assets/images/home.png';
import profileimg from '../../assets/images/profileimg.png';
import report from '../../assets/images/report.png';


Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 70,
          elevation: 0,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#978CD0' : '#FFF',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{padding: 10}}>
                <Image
                  source={home}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#fff' : '#000',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#978CD0' : '#FFF',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{padding: 10}}>
                <Image
                  source={report}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#fff' : '#000',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#978CD0' : '#FFF',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{padding: 10}}>
                <Image
                  source={profileimg}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#fff' : '#000',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
