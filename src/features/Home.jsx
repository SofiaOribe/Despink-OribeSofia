import { Text, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../palette/colors'
import categories from "../data/categories.json"
import CategoryItem from '../components/CategoryItem'

const Home = () => {
    return (
      <View>
        <Text style={styles.titleMain}>The place where you can take care of yourself.</Text>
        <Text>¡Add your makeup and skincare kit!</Text>

        <View>
          <FlatList
            keyExtractor = {item => item.id}
            data = {categories.sort()}
            renderItem = {({item}) => <CategoryItem category={item.name} image={item.image} />}
          />
        </View>

      </View>
    )
}

export default Home

const styles = StyleSheet.create({
    titleMain: {
        fontSize: 30,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: colors.mainDark,
    },
})