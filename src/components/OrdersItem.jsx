import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../palette/colors'

const OrdersItem = ({ value }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: value.image }}
        style={styles.image}
      />
      <View style={styles.contentInfo}>
        <Text style={styles.valuePrice}>{value.name}</Text>
        <Text style={styles.valuePrice}>${value.price}</Text>
      </View>
    </View>
  )
}

export default OrdersItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light200,
    padding: 6,
    borderRadius: 15,
    width: 170,
    marginRight: 10,
    marginBottom: 10,
    height: 230,
  },
  image: {
    width: '100%',
    height: 116,
    borderRadius: 15,
  },
  contentInfo: {
    padding: 8,
    flexDirection: 'column',
    gap: 4,
  },
  valueName: {
    fontFamily: 'RedHat500',
    fontSize: 13,
  },
  valuePrice: {
    fontFamily: 'RedHat500',
    fontSize: 14,
  },
})
