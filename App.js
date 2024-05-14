import { StyleSheet, View,ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Home from './src/features/Home';
import Header from './src/components/Header';
import BottomHeader from './src/components/BottomHeader';
import { colors } from "./src/palette/colors.js";
import { fonts } from "./src/fonts/fonts.js";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.gray200} hidden={false}/>
      <View style={styles.topHeader}>
        <Header />
      </View>
      <ScrollView style={styles.content}>
          <Home/>
      </ScrollView>
      <View style={styles.bottomHeader}>
        <BottomHeader/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light100,
  },
  content: {
    flex: 1,
  },
  bottomHeader: {
    width: '100%',
    bottom: 0,
  },
  topHeader: {
    top: 30,
    width: '100%',
    paddingTop: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    height: 100,
  },
});


export default App;