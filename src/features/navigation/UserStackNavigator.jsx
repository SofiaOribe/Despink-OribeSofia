import { StyleSheet, Text, View } from 'react-native'
import UserAccount from '../UserAccount'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const UserStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserScreen" component={UserAccount} />
    </Stack.Navigator>
  )
}

export default UserStackNavigator

const styles = StyleSheet.create({})
