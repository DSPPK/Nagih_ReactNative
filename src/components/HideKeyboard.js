import React from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'

interface HideKeyboardProps {
    children?: View;
}

const HideKeyboard = (props: HideKeyboardProps) => {
    const { children } = props
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

export default HideKeyboard
