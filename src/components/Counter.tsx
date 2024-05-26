import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { colors } from '../palette/colors'

const Counter = ({ initialAmount, onValueChange }) => {
  const [amountValue, setAmountValue] = useState(initialAmount)

  const handleIncrement = () => {
    const newValue = amountValue + 1
    setAmountValue(newValue)
    onValueChange(newValue)
  }

  const handleDecrement = () => {
    if (amountValue > 0) {
      const newValue = amountValue - 1
      setAmountValue(newValue)
      onValueChange(newValue)
    }
  }

  return (
    <View style={styles.addMoreItems}>
      <Pressable style={styles.buttonLess} onPress={handleDecrement}>
        <FontAwesome6 name="minus" size={15} color="black" />
      </Pressable>
      <Text style={styles.textAmount}>{amountValue}</Text>
      <Pressable style={styles.buttonPlus} onPress={handleIncrement}>
        <FontAwesome6 name="plus" size={15} color={colors.light100} />
      </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  addMoreItems: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonLess: {
    backgroundColor: colors.light100,
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAmount: {
    fontFamily: 'RedHat500',
    fontSize: 15,
  },
  buttonPlus: {
    backgroundColor: colors.dark600,
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
