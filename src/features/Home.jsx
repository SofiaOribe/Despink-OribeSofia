import { Text, StyleSheet, View, Pressable, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../palette/colors.js'
import Search from '../components/Search.jsx'
import CategoryHomeCard from '../components/CategoryHomeCard.jsx'
import { useGetCategoriesQuery } from './api/productsApi.js'

const Home = ({ route, navigation }) => {
  const [keyWord, setKeyword] = useState('')
  const { data: categories, error, isLoading } = useGetCategoriesQuery()
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories)
  const [errorSearch, setErrorSearch] = useState('')
  const [categorySelected, setCategorySelected] = useState('')

  useEffect(() => {
    // No digits validation
    const regexDigits = /\d/
    const hasDigits = regexDigits.test(keyWord)
    if (hasDigits) {
      setErrorSearch("Don't use digits")
      return
    }

    const regexThreeOrMore = /[a-zA-Z]{3,}/
    const hasThreeOrMoreChars = regexThreeOrMore.test(keyWord)

    if (!hasThreeOrMoreChars && keyWord.length) {
      setErrorSearch('Type 3 or more characters')
      return
    }

    if (!isLoading) {
      const categoriesFilter = categories.filter(category =>
        category.name.toLowerCase().includes(keyWord.toLowerCase()),
      )
      setCategoriesFiltered(categoriesFilter)
      setErrorSearch('')
    }
  }, [keyWord, categories])

  const handleSearchClear = () => {
    setKeyword('')
    setCategorySelected('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionTitles}>
        <Text style={styles.titleMain}>Hello,</Text>
        <Text style={styles.titleMain}>we are Despink</Text>
        <Text style={styles.textMain}>Resellers of the Veganis brand</Text>
      </View>
      <Search
        errorSearch={errorSearch}
        onSearch={setKeyword}
        goBack={() => handleSearchClear()}
        placeholder={'Search Category'}
      />

      <Pressable onPress={() => navigation.navigate('ItemListCategory')}>
        <Text style={styles.categoryContent}>Categories</Text>
      </Pressable>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        data={categoriesFiltered}
        renderItem={({ item }) => (
          <CategoryHomeCard
            key={item._id}
            value={item}
            navigation={navigation}
          />
        )}
        horizontal={true}
        contentContainerStyle={styles.categoriesItem}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingTop: 20,
    flexDirection: 'column',
    gap: 20,
    flex: 1,
    width: '100%',
    backgroundColor: colors.light100,
  },
  sectionTitles: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 4,
    width: '70%',
  },
  titleMain: {
    fontSize: 25,
    color: colors.dark600,
    fontFamily: 'Lora600Italic',
  },
  textMain: {
    fontSize: 15,
    color: colors.gray800,
    fontFamily: 'RedHat400',
  },
  categoryContent: {
    color: colors.lila600,
    fontSize: 19,
    fontFamily: 'RedHat500',
  },
  categoriesItem: {
    flexDirection: 'row',
    gap: 20,
  },
})
