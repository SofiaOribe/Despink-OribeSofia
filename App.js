import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from './src/palette/colors.js'
import { fonts } from './src/fonts/fonts.js'
import { useFonts } from 'expo-font'
import Navigator from './src/features/navigation/Navigator.jsx'
import { Provider } from 'react-redux'
import store from './src/store/index.js'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar backgroundColor={colors.gray200} hidden={false} />
        <Navigator />
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
