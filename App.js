// @flow
import * as React from 'react'
import {AppLoading, Constants, Font} from 'expo'
import {StatusBar, View} from 'react-native'
import Navigator from './Navigator'
import ReduxProvider from './components/ReduxProvider'
import s from './styles'

export default class App extends React.Component {
  state: {isReady: boolean} = {
    isReady: false,
  }
  componentWillMount() {
    this.loadFonts()
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({isReady: true})
  }
  render() {
    return (
      <ReduxProvider>
        {this.state.isReady ? (
          <View style={s.flex1}>
            <View height={Constants.statusBarHeight} style={s.bgBlue}>
              <StatusBar barStyle="light-content" />
            </View>
            <Navigator />
          </View>
        ) : (
          <AppLoading />
        )}
      </ReduxProvider>
    )
  }
}
