import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { color, scale, verticalScale } from '../constants/theme'
import Badge from '../components/MyBadge'
import Button from '../components/MyButton'

const Item = ({ item }) => {

    const { ordered, product, des } = item

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.img2}></View>
                <View style={styles.textContainer2}>
                    <Text style={styles.product}>{product}</Text>
                    <Text style={styles.des}>{des}</Text>
                    <View style={styles.buttonView}>
                        <Badge text='-' button />
                        <Text style={styles.text}>{ordered}</Text>
                        <Badge text='+' button />
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/delete.png')} style={styles.icon} />
                </TouchableOpacity>
                <Button edit text='edit' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 8,
        width: scale(346),
        alignSelf: 'center',
        marginVertical: 6,
        paddingHorizontal: scale(7),
        justifyContent: 'space-between'
    },
    img2: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(13),
        backgroundColor: color.GRAY,
        marginRight: scale(7),
        marginTop: verticalScale(12),

    },
    textContainer2: {
        paddingHorizontal: scale(7),
        paddingVertical: scale(6)
    },
    des: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: verticalScale(12),
    },
    product: {
        fontFamily: 'Comfortaa-Bold',
        color: color.COFFE,
        fontSize: scale(16),
    },
    buttonView: {
        width: scale(72),
        flexDirection: 'row',
        height: verticalScale(18),
        justifyContent: 'space-around',
        marginTop: verticalScale(10),
        alignItems: 'center',
        paddingVertical: verticalScale(12)
    },
    icon: {
        width: scale(13),
        height: scale(13),
    },
    container2: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: scale(6),
        paddingVertical: verticalScale(12)
    },
    text: {
        fontSize: scale(13)
    }
})

export default Item