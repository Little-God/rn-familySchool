import React, { Component } from 'react';
import {ScrollView,Text,Image,View,StyleSheet,AppRegistry,TextInput,FlatList,ImageBackground} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import NoticeList from './src/components/index/noticeList'
import TabNav from './TabNav'

const App = StackNavigator({
    TabNav: {screen: TabNav},
    NoticeList: {screen: NoticeList},
});

export default class Demo extends Component {

    render() {
        return (
            <App />
        );
    }
}
