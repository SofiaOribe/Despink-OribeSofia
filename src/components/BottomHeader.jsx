import { Text, StyleSheet, View, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../palette/colors.js';
import { FontAwesome5 , FontAwesome6, FontAwesome } from "@expo/vector-icons";
  
const BottomHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerContent}>
        <Pressable onPress={() => console.log('Menu')} >
          <FontAwesome6 name="house" size={24} color="#C9B0F4" />
        </Pressable>
        <Pressable onPress={() => console.log('Menu')} >
          <FontAwesome name="bookmark" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => console.log('Menu')} >
          <FontAwesome6 name="bag-shopping" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => console.log('Menu')} >
          <FontAwesome5 name="user-alt" size={24} color="black" />
        </Pressable>
        </View>
      </View>
    )
}

export default BottomHeader

const styles = StyleSheet.create({
 header: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.light100,
  },
  headerContent: {
    backgroundColor: colors.light200,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 31,
    width: '100%',
  }
  
})