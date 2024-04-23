import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const navigation = [
    {
      id: 'HOME',
      title: 'Home',
    },
    {
      id: 'PRODUCTS',
      title: 'Products',
      products: [{
        id: 'SKIN_CARE',
        title: 'Skin Care',
        items: [ {
          id: 'SERUM',
          title: 'Serum',
        },
        {
          id: 'EYE_CONTOUR',
          title: 'Eye Contour',
        },
        {
          id: 'DAY_CREAM',
          title: 'NIGHT_CREAM',
        }
     ]}, {
        id: 'MAKE_UP',
        title: 'Make UP',
        items: [ {
          id: 'LIPSTICK',
          title: 'Lipstick',
        },
        {
          id: 'CONCEALER',
          title: 'Lipstick',
        },
        {
          id: 'LIQUID FOUNDATION ',
          title: 'Liquid Foundation',
        }]
      }]
    },
    {
      id: 'WISHLIST',
      title: 'Wishlist',
    },
    {
      id: 'SHOPPING_CART',
      title: 'Shopping Cart',
    },
  ]
  

const Header = () => {

    return (
      <View>
        <Text>Header</Text>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({})