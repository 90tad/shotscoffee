import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs"
import { color, verticalScale } from '../constants/theme'
import StartPage from '../screens/StartPage'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Order from '../screens/Order'
import Account from '../screens/Account'
import FAQ from '../screens/FAQ'
import Icon from '../components/MyIcon'
import { View } from 'react-native'
import Badge from '../components/MyBadge'

const TabNavigator = createBottomTabNavigator(
    {
        FAQ: {
            screen: FAQ,
            navigationOptions: {
                tabBarLabel: 'faq',
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon faq focused />
                        : <Icon faq />
                )
            }
        },
        Order: {
            screen: Order,
            navigationOptions: {
                tabBarLabel: 'order',
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon order focused />
                        : <Icon order />
                )
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'home',
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon home focused />
                        : <Icon home />
                )
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                tabBarLabel: 'cart',
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon cart focused />
                        : <View><Badge text='3' badge/><Icon cart /></View>
                )
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarLabel: 'account',
                tabBarIcon: ({ focused }) => (
                    focused
                        ? <Icon account focused />
                        : <Icon account />
                )
            }
        },
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: color.CAPPUCCINO,
            labelStyle: {
                fontSize: verticalScale(12),
                fontFamily: 'Comfortaa-Light'
            },
            style: {
                backgroundColor: color.COFFE,
                height: verticalScale(61),
                paddingTop: verticalScale(7)
            },
        },
    }

)

const AppNavigator = createStackNavigator({
    StartPage: {
        screen: StartPage,
        navigationOptions: () => ({
            header: null
        })
    },
    Home: {
        screen: TabNavigator,
        navigationOptions: () => ({
            header: null
        })
    },
    Cart: {
        screen: Cart,
        navigationOptions: () => ({
            header: null
        })
    }
})


export default createAppContainer(AppNavigator)