import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { colors } from "../palette/colors.js";


const Search = ({ onSearch = () => {}, error = "", goBack = () => {}, placeholder = ""  }) => {
  const [keyword, setKeyword] = useState("")
  const handleSearch = () => {
    onSearch(keyword);
  };
  const handleClear = () => {
    setKeyword("");
    goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View  style={styles.searchInput}>
        <Feather name="search" size={24} color={colors.gray700} />
          <TextInput
            style={styles.search}
            placeholder={placeholder ? placeholder : "Search"}
            value={keyword}
            styles={{
              color: keyword ? colors.gray700 : colors.dark600,
            }}
            onChangeText={(text) => {
              setKeyword(text)
            }}
            onSubmitEditing={handleSearch}
          />
          {!!keyword && (
            <Pressable  onPress={handleClear} style={styles.searchIcon}>
              <FontAwesome6 name="circle-xmark" size={24} color={colors.gray800} />
            </Pressable>
          )}

        </View>
         {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
  
  },
  searchContainer: {
    width: '100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  searchInput: {
    width: '100%',
    backgroundColor: colors.light200,
    borderRadius: 50,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  search: {
    width: '86%',
    fontSize: 18,
    paddingLeft: 5,
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
    marginLeft: 10,
  },
})