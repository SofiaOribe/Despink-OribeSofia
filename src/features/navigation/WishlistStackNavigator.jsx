import { StyleSheet, Text, View } from 'react-native'
import Wishlist from '../Wishlists'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const WishlistStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WishlistsScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WishlistsScreen" component={Wishlist} />
    </Stack.Navigator>
  )
}

export default WishlistStackNavigator

const styles = StyleSheet.create({})
