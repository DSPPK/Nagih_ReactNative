import { Dimensions, PixelRatio } from "react-native";

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const widthPercentToDp = (widhtPercent: number) => {
    return PixelRatio.roundToNearestPixel((screenWidth * widhtPercent) / 100)
}

const heightPercentToDp = (heightPercent: number) => {
    return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100)
}

export {widthPercentToDp,heightPercentToDp}