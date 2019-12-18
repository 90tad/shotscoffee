import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import { color,scale, verticalScale } from '../constants/theme'

const Item = ({ item }) => {
        const { ImageURL, Title, Price } = item
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: ImageURL }}
                        style={styles.img} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{Title}</Text>
                    <Text style={styles.text}>{`$${Price}.00`}</Text>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        height: verticalScale(67),
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: scale(27),
        marginVertical: verticalScale(15),
    },
    imgContainer: {
        width: scale(69),
        height: verticalScale(67),
        borderRadius: scale(13),
        backgroundColor: color.GRAY
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: scale(13)
    },
    textContainer: {
        justifyContent: 'space-around',
        marginLeft: verticalScale(19)
    },
    text: {
        fontFamily: 'Comfortaa-Bold',
        color: color.COFFE,
        fontSize: scale(16)
    }
})

export default Item