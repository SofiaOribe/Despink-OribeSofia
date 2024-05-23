import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, FontAwesome6, FontAwesome } from '@expo/vector-icons'
import { colors } from '../../palette/colors'
import HomeStackNavigator from './HomeStackNavigator'
import CartStackNavigator from './CartStackNavigator'
import WishlistStackNavigator from './WishlistStackNavigator'
import UserStackNavigator from './UserStackNavigator'
import Header from '../../components/Header'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header />
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.header,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="house"
                  size={24}
                  color={focused ? colors.lila600 : colors.dark600}
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome
                  name="bookmark"
                  size={24}
                  color={focused ? colors.lila600 : colors.dark600}
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="bag-shopping"
                  size={24}
                  color={focused ? colors.lila600 : colors.dark600}
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color={focused ? colors.lila600 : colors.dark600}
                />
              </View>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  header: {
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 70,
    backgroundColor: colors.light200,
    borderTopColor: 'transparent',
  },
})
