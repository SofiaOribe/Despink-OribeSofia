import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../palette/colors'

// I show the category component

const CategoryItem = ({ value, navigation }) => {
  return (
    <View>
      <Pressable
        style={styles.categoryContent}
        onPress={() => {
          navigation.navigate('ItemListProducts', { categoryId: value._id })
        }}
      >
        <Image
          resizeMode="cover"
          source={{ uri: value.image }}
          style={styles.image}
        />
        <Text style={styles.text}>{value.name}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 10,
    padding: 15,
    backgroundColor: colors.light200,
    borderRadius: 16,
    width: 158,
    marginRight: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 109,
    backgroundColor: colors.gray200,
    borderRadius: 16,
  },
  text: {
    fontSize: 15,
    color: colors.dark600,
    fontFamily: 'RedHat500',
  },
})
