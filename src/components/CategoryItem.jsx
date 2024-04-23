import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { colors } from "../palette/colors";

const CategoryItem = ({category, image}) => {
  return (
    <View style={styles.categoryContent}>
      <Image source={image} style={styles.image}/>
      <Text>{category}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: colors.mainLight,
    borderRadius: 10,
    marginBottom: 10,
  },
  image : {
    width: 60,
    height: 60,
  }
});
