import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import line from '../../../assets/images/Line.png';
import article from '../../../assets/images/article.png';
import summarize from '../../../assets/images/summarize.png';
import summarize1 from '../../../assets/images/summarize1.png';
import square_foot from '../../../assets/images/square_foot.png';
import credit_card from '../../../assets/images/credit_card.png';
import emoji_events from '../../../assets/images/emoji_events.png';
import calculate from '../../../assets/images/calculate.png';
import dateimage from '../../../assets/images/date.png';
import {ScrollView} from 'react-native-gesture-handler';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString(undefined, options).toUpperCase();
    console.log(date)
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeFont}>Welcome back</Text>
        <Text
          style={[
            styles.welcomeFont,
            {fontFamily: 'Poppins-Bold', fontSize: moderateScale(24)},
          ]}>
          Amit Patel
        </Text>
        <View style={styles.box}>
          <View style={{gap: 10}}>
            <Text style={styles.attendenceStyle}>Attendence</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Text style={styles.dateStyle}>{formatDate(date)}</Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Image source={dateimage} style={{height: 20, width: 20}} />
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  console.log(date)
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </View>
          <Text style={styles.dateStyle}>93%</Text>
          <Image source={line} style={styles.lineStyle} />
        </View>
        <Text style={styles.quickStyle}>Quick Links</Text>
        <View style={styles.midBox}>
          <View
            style={{gap: 10, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imgBox}>
              <Image source={article} />
            </View>
            <Text style={styles.midBoxText}>Report</Text>
          </View>
          <View
            style={{gap: 10, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imgBox}>
              <Image source={summarize} />
            </View>
            <Text style={styles.midBoxText}>Syllabus</Text>
          </View>
          <View
            style={{gap: 10, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imgBox}>
              <Image source={square_foot} />
            </View>
            <Text style={styles.midBoxText}>Unit Test</Text>
          </View>
          <View
            style={{gap: 10, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imgBox}>
              <Image source={credit_card} />
            </View>
            <Text style={styles.midBoxText}>Payment</Text>
          </View>
        </View>

        <Text style={styles.quickStyle}>Upcoming Events (07)</Text>
        <View style={{gap: 5}}>
          <View style={styles.downBox}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={summarize1} style={{tintColor: 'black'}} />
              <Text style={styles.eventText}>Science Fair Showcase</Text>
            </View>
            <View
              style={{
                gap: -10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.midBoxText}>JAN</Text>
              <Text style={styles.eventDateText}>18</Text>
            </View>
          </View>
          <View style={styles.downBox}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={emoji_events} style={{tintColor: 'black'}} />
              <Text style={styles.eventText}>Math Olympiad</Text>
            </View>
            <View
              style={{
                gap: -10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.midBoxText}>JAN</Text>
              <Text style={styles.eventDateText}>24</Text>
            </View>
          </View>
          <View style={styles.downBox}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={calculate} style={{tintColor: 'black'}} />
              <Text style={styles.eventText}>Sports Day Extravaganza</Text>
            </View>
            <View
              style={{
                gap: -10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.midBoxText}>JAN</Text>
              <Text style={styles.eventDateText}>28</Text>
            </View>
          </View>
          <View style={styles.downBox}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={calculate} style={{tintColor: 'black'}} />
              <Text style={styles.eventText}>Sports Day Extravaganza</Text>
            </View>
            <View
              style={{
                gap: -10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.midBoxText}>JAN</Text>
              <Text style={styles.eventDateText}>28</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: moderateScale(30),
  },
  welcomeFont: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(12),
  },
  box: {
    backgroundColor: '#978CD0',
    borderRadius: moderateScale(20),
    width: moderateScale(335),
    height: verticalScale(144),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  attendenceStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(12),
    color: '#FFF',
  },
  dateStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(20),
    color: '#FFF',
  },
  lineStyle: {
    position: 'absolute',
    right: moderateScale(30),
  },
  quickStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(16),
    marginTop: moderateScale(32),
  },
  midBox: {
    backgroundColor: '#DCD9EF',
    borderRadius: moderateScale(20),
    width: moderateScale(335),
    height: moderateScale(110),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imgBox: {
    width: moderateScale(38),
    height: moderateScale(38),
    backgroundColor: '#978CD0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
  midBoxText: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(13),
  },
  downBox: {
    backgroundColor: '#DCD9EF',
    borderRadius: moderateScale(20),
    width: moderateScale(335),
    height: moderateScale(58),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(16),
  },
  eventText: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(13.5),
  },
  eventDateText: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(20),
  },
});
