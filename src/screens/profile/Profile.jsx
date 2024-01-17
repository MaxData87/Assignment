import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import profile from '../../../assets/images/profile.jpg';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.welcomeFont,
            {fontFamily: 'Poppins-Bold', fontSize: moderateScale(24)},
          ]}>
          Amit Patel
        </Text>
        <View style={styles.imageBox}>
          <Image source={profile} style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.contentBox}>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Student ID Number:</Text>
          <Text style={styles.contentText}>S987654</Text>
        </View>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Class/Grade:</Text>
          <Text style={styles.contentText}>11th Grade</Text>
        </View>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Contact Number:</Text>
          <Text style={styles.contentText}>9875555678</Text>
        </View>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Email Address:</Text>
          <Text style={styles.contentText}>amit.patel@example.com</Text>
        </View>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Parent/Guardian:</Text>
          <Text style={styles.contentText}>Nita Patel</Text>
        </View>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Parent Contact:</Text>
          <Text style={styles.contentText}>8865551234</Text>
        </View>
        <View style={styles.contentTextStyle}>
          <Text style={styles.contentText}>Address:</Text>
          <Text style={styles.contentText}>789 Tulsi Street, Jaipur</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: moderateScale(30),
  },
  imageBox: {
    borderRadius: moderateScale(28),
    width: moderateScale(56),
    height: moderateScale(56),
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  contentBox: {
    marginTop: verticalScale(50),
    width: moderateScale(335),
    height: verticalScale(324),
    backgroundColor: '#DCD9EF',
    alignSelf: 'center',
    padding: moderateScale(20),
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
  },
  contentTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(13),
  },
});
