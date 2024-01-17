import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import back from '../../../assets/images/back.png';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Notification = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
          <Image source={back} style={styles.buttonText} />
        </TouchableOpacity>
        <Text style={styles.txt}>Notification</Text>
      </View>
      <View style={styles.notificatonContainer}>
        <View style={styles.notificatonBox}>
          <Text style={styles.notificationText}>
            Attention parents! The end-of-term exams are approaching. Ensure
            your child is prepared and review the exam schedule available on the
            app.
          </Text>
        </View>
        <View style={styles.notificatonBox}>
          <Text style={styles.notificationText}>
            As the seasons change, please ensure your child is dressed
            appropriately and carries necessary items like water bottles. Health
            is wealth!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20), 
  },
  buttonText: {
    height: verticalScale(40), 
    width: moderateScale(40), 
  },
  notificatonContainer: {
    flex: 1,
    marginTop: verticalScale(40), 
  },
  txt: {
    marginTop: verticalScale(4), 
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(20), 
  },
  notificatonBox: {
    height: verticalScale(123), 
    width: moderateScale(335), 
    backgroundColor: '#DCD9EF',
    borderRadius: moderateScale(12), 
    marginTop: verticalScale(10), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(14), 
    padding: moderateScale(10), 
    lineHeight: moderateScale(20), 
  },
});

export default Notification;
