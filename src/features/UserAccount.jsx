import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from 'react-native'
import { colors } from '../palette/colors'
import orders from '../data/orders.json'
import OrdersItem from '../components/OrdersItem'
import { FontAwesome6 } from '@expo/vector-icons'

const UserAccount = () => {
  const [expandedDates, setExpandedDates] = useState(new Set())
  const ordersByDate = orders.reduce((acc, order) => {
    const date = order.createdAt.split('T')[0]
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(...order.products)
    return acc
  }, {})

  const toggleExpand = date => {
    const updatedDates = new Set(expandedDates)
    if (updatedDates.has(date)) {
      updatedDates.delete(date)
    } else {
      updatedDates.add(date)
    }
    setExpandedDates(updatedDates)
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="cover"
            source={{
              uri: 'https://i.pinimg.com/564x/75/ea/90/75ea90c044fb46ec78d0f0e4c86d276e.jpg',
            }}
            style={styles.imageProfile}
          />
          <View>
            <Text style={styles.orderTitle}>Sofia Jourdan</Text>
            <Text style={styles.userText}>jsofiatm</Text>
          </View>
        </View>
        <View style={styles.marginEdit}>
          <Pressable style={styles.btnEditProfile}>
            <Text style={styles.textEditProfile}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerOrders}>
        <Text style={styles.orderTitle}>My Orders</Text>
        {Object.entries(ordersByDate).map(([date, products]) => (
          <View key={date} style={styles.viewOrders}>
            <TouchableOpacity
              onPress={() => toggleExpand(date)}
              style={styles.touchDate}
            >
              {expandedDates.has(date) ? (
                <FontAwesome6 name="chevron-down" size={15} color="black" />
              ) : (
                <FontAwesome6 name="chevron-right" size={15} color="black" />
              )}
              <Text style={styles.date}>{date}</Text>
            </TouchableOpacity>
            {expandedDates.has(date) && (
              <FlatList
                data={products}
                numColumns={2}
                style={styles.contentOrderItem}
                keyExtractor={(product, index) => index.toString()}
                renderItem={({ item }) => <OrdersItem value={item} />}
              />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default UserAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light100,
    padding: 20,
    flexDirection: 'column',
    gap: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  marginEdit: {
    marginLeft: 72,
  },
  btnEditProfile: {
    backgroundColor: colors.gray600,
    padding: 7,
    borderRadius: 7,
    alignSelf: 'flex-start',
  },
  textEditProfile: {
    fontFamily: 'RedHat500',
    fontSize: 12,
  },
  /* Orders */
  containerOrders: {
    flexDirection: 'column',
    gap: 25,
  },
  orderTitle: {
    fontFamily: 'RedHat500',
    fontSize: 18,
  },
  date: {
    fontFamily: 'RedHat400',
    fontSize: 15,
  },
  touchDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contentOrderItem: {
    gap: 5,
    flexDirection: 'row',
    width: '100%',
    boxSizing: 'border-box',
  },
  viewOrders: {
    flexDirection: 'column',
    gap: 10,
  },
  imageProfile: {
    borderRadius: '50%',
    width: 62,
    height: 62,
  },
})
