import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../../palette/colors.js';
import CategoryItem from "../../components/CategoryItem";
import categories from "../../data/categories.json";
import Search from '../../components/Search';

const ItemListCategory = () => {
  const [keyWord, setKeyword] = useState("")
  const [categoriesFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")
  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")

  useEffect(() => {
    //Products filtered by category

    //No digits validation
    const regexDigits = /\d/
    const hasDigits = regexDigits.test(keyWord)
    if (hasDigits) {
      setError("Don't use digits")
      return
    }

    const regexThreeOrMore = /[a-zA-Z]{3,}/
    const hasThreeOrMoreChars = regexThreeOrMore.test(keyWord)

    if (!hasThreeOrMoreChars && keyWord.length) {
      setError("Type 3 or more characters")
      return
    }

    const categoriesPreFiltered = categories.filter(
      (product) => product.category === categorySelected
    )

    const categoriesFilter = categoriesPreFiltered.filter((category) =>
      category.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    )
    setProductsFiltered(categoriesFilter)
    setError("")
  }, [keyWord, categorySelected])

  console.log("keyWord", keyWord)

  return (
    <View style={styles.container}>
      <Search   
        error={error}
        onSearch={setKeyword}
        goBack={() => setCategorySelected("")}
       /> 
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.categoriesItem}
        keyExtractor = {item => item.id}
        data={categoriesFiltered}
        renderItem = {({item}) => <CategoryItem category={item.name} image={item.image}  setItemIdSelected={setItemIdSelected}/>}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20
  },
  categoriesItem : {
    flexGrow: 1, 
    justifyContent: 'space-evenly',
  }
})