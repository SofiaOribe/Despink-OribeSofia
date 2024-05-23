import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from './src/palette/colors.js'
import { fonts } from './src/fonts/fonts.js'
import { useFonts } from 'expo-font'
import Navigator from './src/features/navigation/Navigator.jsx'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.gray200} hidden={false} />
      <Navigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
