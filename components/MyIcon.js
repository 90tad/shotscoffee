import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { scale } from '../constants/theme'

const MyIcon = ({ faq, order, home, cart, account, focused }) => {

    const iconStyle = [
        faq && styles.faq,
        order && styles.order,
        home && styles.home,
        cart && styles.cart,
        account && styles.account
    ]

    if (focused) {
        return (
            <Image
                source={
                    faq && require('../assets/icons/faq-gold.png') ||
                    order && require('../assets/icons/order-gold.png') ||
                    home && require('../assets/icons/home-gold.png') ||
                    cart && require('../assets/icons/cart-gold.png') ||
                    account && require('../assets/icons/account-gold.png')
                }
                style={iconStyle} />
        )
    }
    return (
        <Image
            source={
                faq && require('../assets/icons/faq-white.png') ||
                order && require('../assets/icons/order-white.png') ||
                home && require('../assets/icons/home-white.png') ||
                cart && require('../assets/icons/cart-white.png') ||
                account && require('../assets/icons/account-white.png')
            }
            style={iconStyle} />


    )
}

const styles = StyleSheet.create({
    faq: { width: scale(27.92), height: scale(27.92) },
    order: { width: scale(19.25), height: scale(19.25) * 28 / 19.25 },
    home: { width: scale(23.3), height: scale(23.3) * 30.6 / 23.3 },
    cart: { width: scale(31.9), height: scale(31.9) * 28.4 / 31.9 },
    account: { width: scale(28), height: scale(28) }
})

export default MyIcon