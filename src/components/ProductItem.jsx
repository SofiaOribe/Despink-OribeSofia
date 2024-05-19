import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { colors } from "../palette/colors";
import { FontAwesome6 } from '@expo/vector-icons';

const ProductItem = ({ 
    value,
    selectProduct = () => {}}
) => {
    return (
    <View style={styles.categoryContent}>
        <Pressable onPress={() => selectProduct(value.id)}>
            <Image resizeMode="cover" source={{ uri: value.image }} style={styles.image} />
        </Pressable>
        <Text style={styles.title}>{value.name}</Text>
        <Text style={styles.price}>${value.price}</Text>
        <Text style={styles.interest}>3 interest-free installments of $3,306</Text>
        <View styles={styles.bottomCard}>
            <Pressable styles={styles.buttonProduct} onPress={() => selectProduct(value.id)}>
                <Text style={styles.textButtonProduct}>See Product</Text>
            </Pressable>
            <Pressable onPress={() => selectProduct(value.id)}>
                <FontAwesome6 name="plus" size={24} color="black" />
            </Pressable>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    categoryContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 14,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.light200,
        width: 175,
        marginRight: 10,
        marginBottom: 10,
    },
    image : {
        width: 155,
        height: 146,
    },
    title: {
        color: colors.dark600,
        fontSize: 15,
        fontFamily: 'RedHat700',
    },
    price: {
        color: colors.dark600,
        fontSize: 16,
        fontFamily: 'RedHat500',
    },
    interest: {
        color: colors.dark600,
        fontSize: 12,
        fontFamily: 'RedHat400',
    },
    bottomCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    buttonProduct: {
        backgroundColor: colors.gray200,
    },
    textButtonProduct: {
        color: colors.dark600,
        fontSize: 14,
    }
})

export default ProductItem;
