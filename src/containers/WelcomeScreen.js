import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Animated, Easing, TextInput, BackHandler, Alert, Switch } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp
} from '../utils/sizeUtils';
import COLORS from "../utils/colorUtils";
import BlueButton from '../components/BlueButton';
import HideKeyboard from '../components/HideKeyboard';

interface WelcomeScreenProps { 
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { } = props;
  const [phone, onChangePhone] = React.useState(null);
  const [password, onChangePassword] = React.useState('');
  const [startClicked, setStartClicked] = React.useState(false);
  const [bottomFlex, setBottomFlex] = React.useState(new Animated.Value(1));

  const [showPassword, setShowPassword] = React.useState(false);
  const toggleSwitch = (checked) => {
    setShowPassword(checked)
  }

  useEffect(() => {
    
    if (startClicked) {
      Animated.timing(bottomFlex, {
        toValue: 7,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear
      }).start();
    } else {
      Animated.timing(bottomFlex, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear
      }).start();
    }
  }, [startClicked]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Reminder.", "Are you sure you want to go exit Application?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const loginScreen = () => {
    setStartClicked(true);
    setShowPassword(false);
  }
  const fetchWrapper = useFetchWrapper();
  const loginAction = () => {
    setStartClicked(false);
    console.log(phone + " = " + password);

  }

  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}
      style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.bookTextStyle}>NAGIH</Text>
        {/* <Text style={styles.bookTextStyle}>GIH</Text> */}
      </View>
      <Animated.View style={[styles.bottomPart, { flex: bottomFlex }]}>
        <HideKeyboard>
          {startClicked ? (
            <View style={{
              flex: 1,
              backgroundColor: COLORS.WHITE,
              borderTopLeftRadius: wp(20),
            }}>
              <Text style={{
                alignSelf: 'center',
                textAlign: 'center',
                marginVertical: hp(1),
                color: COLORS.BLACK,
                fontSize: wp(8),
                letterSpacing: wp(0.1),
                fontFamily: 'Montserrat'
              }}>
                LOGIN
              </Text>
              <TextInput
                style={styles.inputTextStyle}
                placeholder="PHONE"
                keyboardType='numeric'
                onChangeText={onChangePhone}
                value={phone}
              />
              <TextInput
                style={styles.inputTextStyle}
                placeholder="PASSWORD"
                secureTextEntry={!showPassword}
                onChangeText={onChangePassword}
              />
              <View style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: "row",
                marginHorizontal: hp(10),
              }}>
                <Switch onValueChange={toggleSwitch}
                  value={showPassword} />
                <Text style={{ alignSelf: 'center', }}>Show</Text>
              </View>
              <BlueButton text="Login"
                onPress={() => loginAction() } 
                style={{
                  alignSelf: 'center',
                  marginVertical: hp(4),
                }}
              />
            </View>
          ) : (
            <BlueButton
              text="Start with us"
              onPress={() => loginScreen() }
              style={{
                alignSelf: 'center',
              }}
            />
          )}
        </HideKeyboard>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  topPart: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingVertical: hp(7),
    alignItems: 'center',
  },
  bottomPart: {},
  bookTextStyle: {
    color: COLORS.WHITE,
    fontSize: wp(12),
    letterSpacing: wp(4),
    fontFamily: 'Montserrat-Bold',
    textAlign:'center',
  },
  inputTextStyle: {
    borderRadius: wp(8),
    width: wp(70),
    height: hp(6),
    backgroundColor: COLORS.GRADIENT_OPACITY,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: hp(2),
    color: COLORS.BLACK,
    fontSize: wp(4),
    letterSpacing: wp(0.1),
    fontFamily: 'Montserrat',
    shadowColor: COLORS.GRADIENT_3,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2.5,
  },
});

export default WelcomeScreen
