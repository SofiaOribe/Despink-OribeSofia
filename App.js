import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';

const navigation = [
  {
    id: 'HOME',
    title: 'Home',
  },
  {
    id: 'PRODUCTS',
    title: 'Products',
    products: [{
      id: 'SKIN_CARE',
      title: 'Skin Care',
      items: [ {
        id: 'SERUM',
        title: 'Serum',
      },
      {
        id: 'EYE_CONTOUR',
        title: 'Eye Contour',
      },
      {
        id: 'DAY_CREAM',
        title: 'NIGHT_CREAM',
      }
   ]}, {
      id: 'MAKE_UP',
      title: 'Make UP',
      items: [ {
        id: 'LIPSTICK',
        title: 'Lipstick',
      },
      {
        id: 'CONCEALER',
        title: 'Lipstick',
      },
      {
        id: 'LIQUID FOUNDATION ',
        title: 'Liquid Foundation',
      }]
    }]
  },
  {
    id: 'WISHLIST',
    title: 'Wishlist',
  },
  {
    id: 'SHOPPING_CART',
    title: 'Shopping Cart',
  },
]


export default function App() {
  const [itemText, setItemText] = useState("")
  const [itemList, setItemList] = useState(navigation)

  const [expanded, setExpanded] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  }
  const isExpanded = (id) => {
    return expanded === id || (itemList.find(item => item.products && item.products.some(product => product.id === id && expanded === item.id)));
  }

  const toggleExpandItems = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  }

  
  return (
    <View style={styles.container}>
       <ImageBackground
        source={require('./assets/image7.png')}
        style={styles.backgroundImage}
        blurRadius={3} 
      ></ImageBackground>
      <View style={styles.itemListContent}>
      {itemList.map(item => (
        <View key={item.id} style={styles.contentNavigation}>
          <TouchableOpacity onPress={() => toggleExpand(item.id)}>
            <Text style={styles.navigationItems}>{item.title}</Text>
          </TouchableOpacity>
          {item.products && isExpanded(item.id) && (
            <View  style={styles.contentNavigation}>
              {item.products.map(product => (
                <View  key={product.id} style={styles.containerItems}>
                  <View style={styles.divProduct}></View> 
                  <Text style={styles.subNavigationItems}>{product.title}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}


      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover', 
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    height: '100%',
    paddingTop: 50,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  itemListContent : {
    height: '100%',
    width:'100%',
    paddingLeft: 20,
    flexDirection: 'column',
    gap: 20,
  },
  contentNavigation: {
    flexDirection: 'column',
    gap: 18,
  },
  navigationItems: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700',
    color: '#67645E',
  },
  containerItems : {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  subNavigationItems: {
    textTransform: 'uppercase',
    fontSize: 19,
    fontWeight: '700',
    color: '#67645E',
    paddingLeft: 13,
  },
  divProduct : {
    height: 15,
    width: 3,
    backgroundColor: '#67645E'
  }
});


