import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShoppingCart from '../ShoppingCart'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CartScreen" component={ShoppingCart} />
    </Stack.Navigator>
  )
}

export default CartStackNavigator

const styles = StyleSheet.create({})
