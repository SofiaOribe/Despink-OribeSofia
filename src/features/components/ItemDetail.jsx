import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { colors } from '../../palette/colors'
import React, { useEffect, useState } from 'react'
import products from '../../data/products.json'

const ItemDetail = ({ route, navigation }) => {
  const [product, setProduct] = useState(null)
  const { productId: idSelected } = route.params

  useEffect(() => {
    const productSelected = products.find(product => product.id === idSelected)
    setProduct(productSelected)
  }, [idSelected])

  const formatPrice = price => {
    return price.toFixed(3).replace('.', ',')
  }

  let installmentPrice = 0
  if (product && product.price > 0) {
    installmentPrice = formatPrice(product.price / 3)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.buttonBack}>
        <Feather name="arrow-left" size={24} color="black" />
      </Pressable>
      {product && (
        <Image
          resizeMode="cover"
          source={{ uri: product.image }}
          style={styles.image}
        />
      )}
      {product && (
        <View style={styles.containerDetail}>
          <View>
            <Text style={styles.title}>{product.name}</Text>
            <View style={styles.reviewStar}>
              <View style={styles.contentStar}>
                <FontAwesome name="star" size={15} color="#F8AE28" />
                <FontAwesome name="star" size={15} color="#F8AE28" />
                <FontAwesome name="star" size={15} color="#F8AE28" />
                <FontAwesome name="star" size={15} color="#F8AE28" />
                <FontAwesome name="star-o" size={15} color="#F8AE28" />
              </View>
              <Text style={styles.purchasesText}>
                ({product.purchases} purchases)
              </Text>
            </View>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.interest}>
              3 interest-free installments of ${installmentPrice}
            </Text>
            <Pressable style={styles.buttonAdd}>
              <Text style={styles.addText}>Add to cart</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    backgroundColor: colors.light100,
    flex: 1,
  },
  containerDetail: {
    flexDirection: 'column',
    gap: 20,
    padding: 20,
  },
  buttonBack: {
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 362,
  },
  title: {
    fontFamily: 'RedHat700',
    fontSize: 18,
  },
  price: {
    fontSize: 25,
    fontFamily: 'RedHat500',
    marginTop: 15,
  },
  purchasesText: {
    color: colors.gray800,
    fontFamily: 'RedHat400',
  },
  contentStar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reviewStar: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  interest: {
    fontFamily: 'RedHat400',
    fontSize: 12,
  },
  buttonAdd: {
    marginTop: 20,
    height: 50,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light300,
  },
  addText: {
    fontFamily: 'RedHat400',
    fontSize: 18,
  },
})
