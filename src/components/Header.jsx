import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { colors } from '../palette/colors'

const Header = () => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => console.log('Menu')}>
        <FontAwesome6 name="bars" size={25} color="black" strokeWidth={2} />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: colors.light100,
  },
})
