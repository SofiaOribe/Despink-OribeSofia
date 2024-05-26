import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import ProductItem from '../../components/ProductItem'
import Search from '../../components/Search'
import { colors } from '../../palette/colors'
import { Feather } from '@expo/vector-icons'
import { useGetProductsByCategoryQuery } from '../api/productsApi'

const ItemListProducts = ({ navigation, route }) => {
  const { categoryId } = route.params

  console.log(categoryId, 'categoryId')
  const {
    data: productsFetched,
    error: errorFromFetch,
    isLoading,
  } = useGetProductsByCategoryQuery(categoryId)
  console.log(productsFetched, 'productsFetcheds')
  const [keyWord, setKeyword] = useState('')
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isLoading) {
      const filteredProducts = productsFetched.filter(product =>
        product.name.toLowerCase().includes(keyWord.toLowerCase()),
      )

      setProductsFiltered(filteredProducts)
      setError('')
    }
  }, [categoryId, productsFetched, isLoading])

  const handleSearch = text => {
    if (text) {
      setErrorSearch('')
      const keyword = text.trim().toLowerCase()
      const filtered = productsFiltered.filter(product =>
        product.category.name.toLowerCase().includes(keyword),
      )
      setKeyword(text)
      setProductsFiltered(filtered)
    } else {
      setErrorSearch('The search text must be greater than or equal to 1')
    }
  }

  const handleSearchClear = () => {
    setKeyword('')
    setFilteredCategories(categories)
    setErrorSearch('')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" />
      </Pressable>
      <Search
        error={error}
        onSearch={handleSearch}
        goBack={() => handleSearchClear()}
        placeholder={'Search Product'}
      />
      <FlatList
        keyExtractor={item => item._id}
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
