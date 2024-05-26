import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../palette/colors'
import { FontAwesome6 } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({ value }) => {
  const dispatch = useDispatch()
  const [productAmount, setProductAmount] = useState(0)

  console.log(productAmount)

  const handleValueChange = newValue => {
    setProductAmount(newValue)
  }

  useEffect(() => {
    setProductAmount(initialAmount)
  }, [initialAmount])

  return (
    <View>
      <View style={styles.card} onPress={() => {}}>
        <Image
          resizeMode="cover"
          source={{ uri: value.image }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>{value.name}</Text>
            <Pressable style={styles.buttonTrash}>
              <FontAwesome6 name="trash" size={17} color={colors.dark600} />
            </Pressable>
          </View>
          <View style={styles.priceAndAddItem}>
            <Counter initialAmount={0} onValueChange={handleValueChange} />
            <Text style={styles.priceText}>${value.price}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    backgroundColor: colors.light300,
    flexDirection: 'row',
    gap: 10,
    padding: 8,
    height: 100,
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 85,
    borderRadius: 15,
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  contentTitle: {
    width: 241,
    flexDirection: 'row',
    gap: 20,
  },
  buttonTrash: {
    width: 24,
    height: 24,
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'RedHat500',
    fontSize: 14,
    width: 189,
  },
  priceText: {
    fontFamily: 'RedHat700',
    fontSize: 15,
  },
  priceAndAddItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
})
