import { StyleSheet } from 'react-native'
import React from 'react'
import Home from '../Home'
import ItemListCategory from '../components/ItemListCategory'
import ItemListProducts from '../components/ItemListProducts'
import ProductItem from '../../components/ProductItem'
import ItemDetail from '../components/ItemDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="HomeScreen" />
      <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
      <Stack.Screen component={ItemListProducts} name="ItemListProducts" />
      <Stack.Screen component={ProductItem} name="ProductItem" />
      <Stack.Screen component={ItemDetail} name="ItemDetail" />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})
