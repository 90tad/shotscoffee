import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { scale, verticalScale } from '../constants/theme'
import Item from '../components/Item'
import Button from '../components/MyButton'
import Header from '../components/Header'
import { fetchData } from '../action/data'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Divider from '../components/Divider'
import ActivityIndicator from '../components/MyActivityIndicator'

class Home extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchData(this.props.token)
    }

    _listHeaderComponent() {
        return (
            <View style={styles.listHeaderComponent}>
                <Text style={styles.text}>Get your coffee fix</Text>
                <Divider />
            </View>
        )
    }
    render() {
        const { data, fetching } = this.props
        return (
            <View style={styles.container}>
                <Header title='Hello John.' />
                {fetching
                    ? <ActivityIndicator />
                    : <FlatList
                        ListHeaderComponent={this._listHeaderComponent}
                        data={data}
                        renderItem={data => <Item item={data.item} />}
                        keyExtractor={item => item.id.toString()}
                    />
                }
                <View style={styles.button}><Button coffee text='Next' /></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        position: 'absolute',
        bottom: verticalScale(11),
        right: scale(38)
    },
    listHeaderComponent: {
        paddingLeft: scale(22.5),
        width: '100%',
        height: scale(27.5),
        marginTop: verticalScale(47.59),
        marginBottom: verticalScale(26.5)
    },
    text: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: verticalScale(18),
    }
})

function mapStateToProps(state) {
    return {
        data: state.data.data,
        token: state.user.token,
        fetching: state.data.fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)