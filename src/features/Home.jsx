import { Text, StyleSheet, View } from 'react-native';
import React, {useState} from 'react';
import { colors } from '../palette/colors.js';
import ItemListCategory from './components/ItemListCategory';

const Home = () => {
  

    return (
      <View style={styles.container}>
        {/*   <Search error = {error} onSearch={setKeyword} goBack={()=> setCategorySelected("")}/> */}
        <View style={styles.sectionTitles}>
            <Text style={styles.titleMain}>Hello,</Text>
            <Text style={styles.titleMain}>we are Despink</Text>
            <Text style={styles.textMain}>Resellers of the Veganis brand</Text>
        </View>
       <ItemListCategory />
      </View>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 80,
    paddingLeft: 20,
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },
  sectionTitles: {
    flexDirection: "column",
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

})