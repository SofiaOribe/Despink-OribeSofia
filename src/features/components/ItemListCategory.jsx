import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryItem from '../../components/CategoryItem'
import Search from '../../components/Search'
import { colors } from '../../palette/colors'
import { Feather } from '@expo/vector-icons'
import { useGetCategoriesQuery } from '../api/productsApi.js'
// I render all categories
// The search component searches for the category of the item. If I click on a specific category, it should show the products in the category.

const ItemListCategory = ({ route, navigation }) => {
  const [keyWord, setKeyword] = useState('')
  const { data: categories, error, isLoading } = useGetCategoriesQuery()
  const [filteredCategories, setFilteredCategories] = useState([])
  const [errorSearch, setErrorSearch] = useState('')

  useEffect(() => {
    if (!isLoading) {
      setFilteredCategories(categories)
    }
  }, [categories, isLoading])

  const handleSearch = text => {
    if (text) {
      setErrorSearch('')
      const keyword = text.trim().toLowerCase()
      const filtered = categories.filter(category =>
        category.name.toLowerCase().includes(keyword),
      )
      setKeyword(text)
      setFilteredCategories(filtered)
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
        error={errorSearch}
        onSearch={handleSearch}
        goBack={() => handleSearchClear()}
        placeholder={'Search Category'}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        data={filteredCategories}
        renderItem={({ item }) => (
          <CategoryItem value={item} navigation={navigation} />
        )}
        numColumns={2}
        contentContainerStyle={styles.categoriesItem}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    padding: 20,
    backgroundColor: colors.light100,
    flex: 1,
  },
  categoriesItem: {
    flexGrow: 1,
  },
})
