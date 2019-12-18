/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppContainer from './navigation/AppNavigation'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import store from './store/config'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App;
