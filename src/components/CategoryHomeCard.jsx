import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const CategoryHomeCard = ({
  value,
  navigation 
}) => {
  return (
    <View>
      <Pressable  style={styles.categoryContent} onPress={()=>navigation.navigate('ItemListProducts', {categoryId: value.id})}>
        <Image resizeMode="cover" source={{ uri: value.image }} style={styles.image}/>
        <Text style={styles.text}>{value.name}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryHomeCard

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 25,
  }
})