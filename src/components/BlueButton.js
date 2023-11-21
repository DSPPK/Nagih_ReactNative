import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp
} from '../utils/sizeUtils';
import COLORS from "../utils/colorUtils";

interface BlueButtonProps {
    text: string | number;
    onPress?: () => void;
    style?: ViewStyle;
}

const BlueButton = (props: BlueButtonProps) => {
    const { text, onPress, style } = props
    return (
        <TouchableOpacity style={[styles.blueButtonStyle, style]} onPress={onPress}>
            <Text style={styles.startTextStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    blueButtonStyle: {
        backgroundColor: COLORS.BLUE,
        height: hp(5),
        width: wp(50),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(5),
        shadowColor: COLORS.GREY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    startTextStyle: {
        color: COLORS.WHITE,
        fontFamily: 'Montserrat-Regular',
        letterSpacing: wp(0.5),
    }
})

export default BlueButton
