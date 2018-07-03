import React, { Component } from 'react';
import {ScrollView,Text,Image,View,StyleSheet,AppRegistry,TextInput,FlatList,ImageBackground,SectionList,TouchableHighlight} from 'react-native';

export default class linkList extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.linkTop}>
                    <Text>班级：初一一班</Text>
                    <Text>班主任：王明中</Text>
                </View>
                <View style={styles.container}>
                    <SectionList
                        sections={[
                            {title: '教师', data: ['Devin']},
                            {title: '家长', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) =>
                            <View style={styles.childrenPeo}>
                                <Text style={styles.item}>{item}</Text>
                                <View style={styles.ImageGo}>
                                    <Image style={styles.img} source={require('../../../img/muwu.jpg')}/>
                                    <Image style={styles.img} source={require('../../../img/muwu.jpg')}/>
                                    <Image style={styles.img} source={require('../../../img/muwu.jpg')}/>
                                </View>
                            </View>
                        }
                        renderSectionHeader={({section}) => <View><Text style={styles.sectionHeader}>{section.title}</Text></View>}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linkTop:{
        height:50,
        paddingLeft:20,
        paddingRight:20,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    childrenPeo:{
        flex:1,
        justifyContent: 'space-between',
        flexDirection:'row',
        marginLeft:30,
        paddingRight:20,
        borderStyle: 'solid',
        borderBottomColor:'#efefef',
        borderBottomWidth:1

    },
    sectionHeader: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        borderStyle: 'solid',
        borderBottomColor:'#efefef',
        borderTopColor:'#efefef',
        borderTopWidth:1,
        borderBottomWidth:1
    },
    item: {
        padding: 10,
        paddingLeft: 0,
        fontSize: 18,
        height: 44,
    },
    ImageGo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-end',
    },
    img:{
        width:30,
        height:30,
        marginLeft:20
    }


})