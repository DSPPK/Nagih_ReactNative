import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import WelcomeScreen from './src/containers/WelcomeScreen';
// import MaintenanceScreen from './src/containers/MaintenanceScreen';
// import SplashScressSample from './src/containers/SplashScressSample';
import COLORS from "./src/utils/colorUtils";


export default class App extends Component {
  constructor() {
    super(); this.state = {
      isVisible: true,
    }
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible : false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 3000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image source={{ uri: 'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png' }}
            style={{
              width: '100%', height: '100%', resizeMode:
                'contain'
            }} />
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <WelcomeScreen />
        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer:
  {
      flex: 1,
  },
  SplashScreen_RootView:
  {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  SplashScreen_ChildView:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GRADIENT_1,
    flex: 1,
  },
});

//const App = () => <WelcomeScreen />
 
//export default App;