import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/settings/Settings.jsx';
import Dashboard from '../screens/dashboard/Dashboard.jsx';
import Home from '../screens/home/Home.jsx';
import menu from '../../assets/images/menu.png';
import notification from '../../assets/images/notification.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Image source={menu} style={{ height: 38, width: 38 }} />
    </TouchableOpacity>
  );
};

const DrawerNavigation = () => {

  const navigation = useNavigation();
  const handleNotification = () =>{
      navigation.navigate("Notification")
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerLeft: () => <CustomDrawerHeader />,
        headerRight: () => {
          return(
            <TouchableOpacity onPress={handleNotification}>
              <Image source={notification} style={{ marginRight: 10}}/>
            </TouchableOpacity>
          )
        }
      }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
