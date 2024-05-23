import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../palette/colors'
import { FontAwesome6 } from '@expo/vector-icons'

const CartItem = ({ value }) => {
  return (
    <View>
      <View style={styles.card} onPress={() => {}}>
        <Image
          resizeMode="cover"
          source={{ uri: value.image }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>{value.name}</Text>
            <Pressable style={styles.buttonTrash}>
              <FontAwesome6 name="trash" size={17} color={colors.dark600} />
            </Pressable>
          </View>
          <View style={styles.priceAndAddItem}>
            <View style={styles.addMoreItems}>
              <Pressable style={styles.buttonLess}>
                <FontAwesome6 name="minus" size={15} color="black" />
              </Pressable>
              <Text style={styles.textAmount}>{value.amount}</Text>
              <Pressable style={styles.buttonPlus}>
                <FontAwesome6 name="plus" size={15} color={colors.light100} />
              </Pressable>
            </View>
            <Text style={styles.priceText}>${value.price}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    backgroundColor: colors.light300,
    flexDirection: 'row',
    gap: 10,
    padding: 8,
    height: 100,
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 85,
    borderRadius: 15,
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  contentTitle: {
    width: 241,
    flexDirection: 'row',
    gap: 20,
  },
  buttonTrash: {
    width: 24,
    height: 24,
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'RedHat500',
    fontSize: 14,
    width: 189,
  },
  priceText: {
    fontFamily: 'RedHat700',
    fontSize: 15,
  },
  priceAndAddItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  addMoreItems: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textAmount: {
    fontFamily: 'RedHat500',
    fontSize: 15,
  },
  buttonLess: {
    backgroundColor: colors.light100,
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
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
