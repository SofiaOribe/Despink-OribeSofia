import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import cart from '../data/cart.json'
import CartItem from '../components/CartItem'
import { colors } from '../palette/colors'

const ShoppingCart = () => {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={cart => cart.id}
        renderItem={({ item }) => {
          return <CartItem value={item} />
        }}
        style={styles.containerItems}
      />
      <View style={styles.bottom}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${total}</Text>
          <Text style={styles.subText}>(Does not include shipping)</Text>
        </View>
        <Pressable style={styles.buttonBuy}>
          <Text style={styles.textBuyAll}>BUY ALL</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light100,
    flex: 1,
    boxSizing: 'border-box',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.light100,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: '100%',
    flexDirection: 'column',
    gap: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  totalText: {
    fontFamily: 'RedHat800',
    fontSize: 15,
  },
  subText: {
    fontFamily: 'RedHat400',
    fontSize: 12,
  },
  containerItems: {
    boxSizing: 'border-box',
    paddingHorizontal: 20,
  },
  buttonBuy: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green200,
  },
  textBuyAll: {
    fontFamily: 'RedHat500',
    fontSize: 15,
  },
})
