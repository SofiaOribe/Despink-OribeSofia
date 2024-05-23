import React from 'react'
import { StyleSheet, View, Image, Pressable, Text } from 'react-native'
import { colors } from '../palette/colors'
import { FontAwesome6 } from '@expo/vector-icons'

const ProductItem = ({ value, navigation }) => {
  return (
    <View style={styles.categoryContent}>
      <Pressable
        onPress={() =>
          navigation.navigate('ItemDetail', { productId: value.id })
        }
      >
        <Image
          resizeMode="cover"
          source={{ uri: value.image }}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.title}>{value.name}</Text>
      <Text style={styles.price}>${value.price}</Text>
      <Text style={styles.interest}>
        3 interest-free installments of $3,306
      </Text>
      <View style={styles.bottomCard}>
        <Pressable
          style={styles.buttonProduct}
          onPress={() =>
            navigation.navigate('ItemDetail', { productId: value.id })
          }
        >
          <Text style={styles.textButtonProduct}>See product</Text>
        </Pressable>
        <Pressable
          style={styles.buttonPlus}
          onPress={() => selectProduct(value.id)}
        >
          <FontAwesome6 name="plus" size={13} color={colors.lila600} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.light100,
    width: 175,
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 155,
    height: 146,
  },
  title: {
    color: colors.dark600,
    fontSize: 15,
    fontFamily: 'RedHat700',
  },
  price: {
    color: colors.dark600,
    fontSize: 16,
    fontFamily: 'RedHat500',
  },
  interest: {
    color: colors.dark600,
    fontSize: 12,
    fontFamily: 'RedHat400',
  },
  bottomCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  buttonProduct: {
    backgroundColor: colors.gray600,
    height: 32,
    width: 113,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  textButtonProduct: {
    color: colors.dark600,
    fontSize: 12,
    fontFamily: 'RedHat700',
  },
  buttonPlus: {
    width: 32,
    height: 32,
    backgroundColor: colors.lila100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
})

export default ProductItem
