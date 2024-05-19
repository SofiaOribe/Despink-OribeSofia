import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import products from "../../data/products.json";
import ProductItem from "../../components/ProductItem";
import Search from '../../components/Search';

const ItemListProducts = ({
  navigation,
  route
}) => {
    const [keyWord, setKeyword] = useState("")
    const [productsFiltered, setProductsFiltered] = useState(products); 
    const [error, setError] = useState("")
    const [productSelected, setProductSelected] = useState("")

    const { categoryId } = route.params
    console.log(categoryId)
    useEffect(() => {
      // Filtrar productos por categoría
      const filteredByCategory = products.filter(product => product.category.id === categoryId);
      setProductsFiltered(filteredByCategory);
      console.log("Filtered by category:", filteredByCategory);
    }, [categoryId]);
  
    useEffect(() => {
      // No digits validation
      const regexDigits = /\d/;
      const hasDigits = regexDigits.test(keyWord);
      if (hasDigits) {
        setError("Don't use digits");
        return;
      }
  
      const regexThreeOrMore = /[a-zA-Z]{3,}/;
      const hasThreeOrMoreChars = regexThreeOrMore.test(keyWord);
  
      if (!hasThreeOrMoreChars && keyWord.length) {
        setError("Type 3 or more characters");
        return;
      }
  
      // Filtrar productos por palabra clave dentro de los ya filtrados por categoría
      const filteredByKeyword = products.filter(product =>
        product.category.id === categoryId &&
        product.name.toLowerCase().includes(keyWord.toLowerCase())
      );
      setProductsFiltered(filteredByKeyword);
      setError("");
      console.log("Filtered by keyword:", filteredByKeyword); 
    }, [keyWord, categoryId]);
  
    const handleProductSelect = (categoryId) => {
      setProductSelected(categoryId);
    };
  
    const handleSearchClear = () => {
      setKeyword(""); 
      setProductSelected(""); 
    };


    return (
    <View style={styles.container}>
        <Search   
          error={error}
          onSearch={setKeyword}
          goBack={() => handleSearchClear()}
          placeholder={"Search Product"}
         />
         <FlatList
          keyExtractor={(item) => item.id}
          data={productsFiltered}
          renderItem={({ item }) => (
            <ProductItem
              value={item}
              selectProduct={handleProductSelect}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.categoriesItem}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 20,
        padding: 20,
    },
    categoriesItem : {
        flexGrow: 1, 
    }
})

export default ItemListProducts;
