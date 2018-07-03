import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class HeaderLoad extends Component{
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.headTitle}>{this.props.title}</Text>
                <Text style={styles.headRight}>{this.props.right}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',

    },
    headTitle:{
        fontSize:16,
        color:'#000',
        lineHeight:45
    },
    headRight:{
        position:'absolute',
        right:10,
        color:'#1677d2'
    }


})