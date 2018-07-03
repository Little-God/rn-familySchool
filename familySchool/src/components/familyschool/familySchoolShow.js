import React, { Component } from 'react';
import {ScrollView,Alert,Text,Image,View,StyleSheet,AppRegistry,TextInput,FlatList,ImageBackground,TouchableOpacity,TouchableHighlight} from 'react-native';
import Header from '../commont/Header'

export default class familySchoolShow extends Component{
    constructor(props){
        super (props);
        this.state={
            show:false,
            data: [
                {id:1,key: 'Devin',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:2,key: 'Jackson',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:3,key: 'James',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:4,key: 'Joel',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:5,key: 'John',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:6,key: 'Jillian',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:7,key: 'Jimmy',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
                {id:8,key: 'Julie',imgurl:require('../../../img/cbd.jpg'),textContent:'哈哈哈',time:'2018-04-19 16:27:11',show:false},
            ]
        }
    }
    _onShowPingLun(ind){
        var dataN = [];
        this.state.data.map((item)=>{
            if(item.key == ind){
                item.show = !item.show;
            }
            dataN.push(item)
        })
        this.setState({
            data: dataN
        });
    }

    render(){
        let pinglun = <View style={styles.pingLunText}>
            <Text style={[styles.pingLunTB,styles.pL]}>赞</Text>
            <Text style={[styles.pingLunTB,styles.pR]}>评论</Text>
        </View>
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <Header title={'家校圈'} right={'发布'}></Header>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <View style={styles.fsUl}>
                            <Image source={item.imgurl} style={styles.urlImg} />
                            <View style={{flex:1}}>
                                <Text style={styles.item}>{item.key}</Text>
                                <Text style={styles.itemText}>{item.textContent}</Text>
                                <View style={styles.pingLunT}>
                                    <Text style={styles.itemTime}>{item.time}</Text>
                                    <View style={styles.pingLun}>
                                        {item.show?pinglun:null}
                                        <TouchableHighlight onPress={this._onShowPingLun.bind(this,item.key)}><Image source={require('../../../img/cbd.jpg')} style={styles.pingImg} /></TouchableHighlight>
                                    </View>
                                </View>

                            </View>

                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fsUl:{
        flex:1,
        flexDirection:'row',
        padding:10,
        paddingLeft:0,
        marginLeft:10,
        borderStyle: 'solid',
        borderBottomColor:'#efefef',
        borderBottomWidth:1,
        paddingBottom:15,
    },
    urlImg:{
        width:40,
        height:40,
        marginRight:10,
        marginTop:5,

    },
    pingLunTB:{
        width:30,
        textAlign:'center',

        color:'#fff',
        fontSize:10

    },
    pL:{
        borderStyle:'solid',
        borderRightWidth:1,
        borderRightColor:'#fff'
    },
    pR:{

    },
    pingImg:{
        width:40,
        height:20,
    },
    item:{
        color:'#1677d2',
        fontSize:16
    },
    itemText:{
        color:'#999'
    },
    itemTime:{
        fontSize:10,
        color:'#aaa'
    },
    pingLunT:{
        flex:1,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    pingLun:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        overflow:'hidden'
    },
    pingLunText:{
        backgroundColor:'rgba(0,0,0,0.7)',
        padding:3,
        flexDirection:'row',
        alignItems:'center',
        marginRight:7,
        borderRadius:3,
    },
    pingLunH:{
        position: 'absolute',
        left:-999
    }


})