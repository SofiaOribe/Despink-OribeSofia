import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import products from '../../data/products.json'
import ProductItem from '../../components/ProductItem'
import Search from '../../components/Search'
import { colors } from '../../palette/colors'
import { Feather } from '@expo/vector-icons'
const ItemListProducts = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState('')
  const [productsFiltered, setProductsFiltered] = useState(products)
  const [error, setError] = useState('')

  const { categoryId } = route.params
  
  useEffect(() => {
    // Filtrar productos por categoría
    const filteredByCategory = products.filter(
      product => product.category.id === categoryId,
    )
    setProductsFiltered(filteredByCategory)
  }, [categoryId])

  useEffect(() => {
    // No digits validation
    const regexDigits = /\d/
    const hasDigits = regexDigits.test(keyWord)
    if (hasDigits) {
      setError("Don't use digits")
      return
    }

    const regexThreeOrMore = /[a-zA-Z]{3,}/
    const hasThreeOrMoreChars = regexThreeOrMore.test(keyWord)

    if (!hasThreeOrMoreChars && keyWord.length) {
      setError('Type 3 or more characters')
      return
    }

    // Filtrar productos por palabra clave dentro de los ya filtrados por categoría
    const filteredByKeyword = products.filter(
      product =>
        product.category.id === categoryId &&
        product.name.toLowerCase().includes(keyWord.toLowerCase()),
    )
    setProductsFiltered(filteredByKeyword)
    setError('')
  }, [keyWord, categoryId])

  const handleSearchClear = () => {
    setKeyword('')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </Pressable>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => handleSearchClear()}
        placeholder={'Search Product'}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem value={item} navigation={navigation} />
        )}
        numColumns={2}
        contentContainerStyle={styles.categoriesItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    padding: 20,
    flex: 1,
    backgroundColor: colors.light100,
  },
  categoriesItem: {
    flexGrow: 1,
  },
})

export default ItemListProducts
