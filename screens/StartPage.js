import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, Alert } from 'react-native'
import { color, scale, verticalScale } from '../constants/theme'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { userPostFetch } from '../action/user'

class StartPage extends Component {
    constructor(props) {
        super(props)
        this._onPress = this._onPress.bind(this)
        this.state = {
            username: '',
            password: ''
        }
    }
    _onPress() {
        const { username, password } = this.state
        if (username == 'goroyven@gmail.com' && password == '123456') {
            this.props.navigation.navigate('Home')
            this.props.userPostFetch(this.state)
        }
        else {
            Alert.alert(
                'Oops!',
                'Invaild username/password',
            )
        }
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={styles.keyboardAvoidingView}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>logo</Text>
                    </View>
                    <View style={styles.keyboardAvoidingView}>

                        <View style={styles.inputContainer}>
                            <MyInput placeholder='Email' onChangeText={text => this.setState({ username: text })} />
                            <MyInput placeholder='Password' onChangeText={text => this.setState({ password: text })} />
                        </View>

                        <View style={styles.button}>
                            <MyButton cappuccino onPress={this._onPress} text='Login' />
                            <Text style={styles.text}>No Account? SIGN UP</Text>
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        color: color.CAPPUCCINO,
        fontSize: scale(20),
        fontFamily: 'Comfortaa-Bold'
    },
    text: {
        fontSize: verticalScale(11),
        color: 'white',
        fontFamily: 'Comfortaa-Regular',
        marginTop: verticalScale(8)
    },
    keyboardAvoidingView: {
        flex: 1
    },
    container:
    {
        backgroundColor: color.COFFE,
        flex: 1
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        alignItems: 'center',
        marginBottom: scale(36)
    },
    button: {
        alignItems: 'center'
    }
})

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ userPostFetch }, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)
