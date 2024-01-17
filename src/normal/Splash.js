import {StyleSheet, Text, View, Animated, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import Svg, {Circle} from 'react-native-svg';
import BallSvg from '../../assets/images/ball.svg';

const animatedValue = new Animated.Value(0);

const Splash = ({navigation, props}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 1000); // Adjust the timeout as needed
  }, [navigation]);

  return (

    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.backgroundImage}
    >

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'Poppins-Medium',
    fontSize: 30,}}>Welcome</Text>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        preserveAspectRatio="xMidYMid"
        style={{
          margin: 'auto',
          background: '#fff',
          display: 'block',
          shapeRendering: 'auto',
          animationPlayState: 'running',
          animationDelay: '0s',
        }}
        viewBox="0 0 100 100"
        {...props}>
        <Circle
          cx={50}
          cy={23}
          r={13}
          fill="#e15b64"
          style={{
            animationPlayState: 'running',
            animationDelay: '0s',
          }}></Circle>
      </Svg>
    </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
    alignItems: 'center',
  },
});
