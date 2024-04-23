import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Home from './src/features/Home';
import Header from './src/components/Header';

const App = () => {

  return (
    <View style={styles.container}>
       <ImageBackground
        source={require('./assets/image7.png')}
        style={styles.backgroundImage}
        blurRadius={3} 
      ></ImageBackground>
      <Header />
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover', 
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});


export default App;