import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Home from '../Home'
import BottomHeader from '../../components/BottomHeader'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ItemListCategory from '../components/ItemListCategory'
import ItemListProducts from '../components/ItemListProducts'
import ProductItem from '../../components/ProductItem'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
            component={Home}
            name='Home'
        />
        <Stack.Screen 
            component={ItemListCategory}
            name='ItemListCategory'
        />
        <Stack.Screen 
            component={ItemListProducts}
            name='ItemListProducts'
        />
        <Stack.Screen 
            component={ProductItem}
            name='ProductItem'
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
    
})