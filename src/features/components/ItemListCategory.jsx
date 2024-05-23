import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryItem from '../../components/CategoryItem'
import categories from '../../data/categories.json'
import Search from '../../components/Search'
import { colors } from '../../palette/colors'
import { Feather } from '@expo/vector-icons'
// I render all categories
// The search component searches for the category of the item. If I click on a specific category, it should show the products in the category.

const ItemListCategory = ({ route, navigation }) => {
  const [keyWord, setKeyword] = useState('')
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories)
  const [error, setError] = useState('')
  const [categorySelected, setCategorySelected] = useState('')

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

    const categoriesFilter = categories.filter(category =>
      category.name.toLowerCase().includes(keyWord.toLowerCase()),
    )
    setCategoriesFiltered(categoriesFilter)
    setError('')
  }, [keyWord])

  const handleSearchClear = () => {
    setKeyword('')
    setCategorySelected('')
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
        placeholder={'Search Category'}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={categoriesFiltered}
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
    justifyContent: 'space-evenly',
  },
})
