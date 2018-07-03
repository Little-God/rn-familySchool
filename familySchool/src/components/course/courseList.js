import React, { Component } from 'react';
import {ScrollView,Alert,Text,Image,View,StyleSheet,AppRegistry,TextInput,FlatList,ImageBackground,TouchableOpacity,TouchableHighlight} from 'react-native';
import Header from '../commont/Header'


class AD extends Component{
    constructor(props){
        super (props);
        this.state={
            xud:'',
            cls:'',
            sub:'',
            xuq:''
        }
    }

    render(){
        return(
            <View >
                <View style={styles.liitem}>
                    <View style={styles.itemtitle}><Text>学段：</Text></View>
                    <View style={styles.itemtext}><Text style={styles.itemit}>全部</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text><Text style={styles.itemit}>小学</Text></View>
                </View>
                <View style={styles.liitem}>
                    <View style={styles.itemtitle}><Text>学段：</Text></View>
                    <View style={styles.itemtext}><Text style={styles.itemit}>全部</Text><Text style={styles.itemit}>小学</Text></View>
                </View>
            </View>
        )
    }
}

class AS extends Component{
    render(){
        return(
            <View>
                <Text>345</Text>
            </View>
        )
    }
}

export default class familySchoolShow extends Component{
    constructor(props){
        super (props);
        this.state={
            showTab:true
        }
        this._onTab = this._onTab.bind(this);
    }
    _onTab(isShow){
        this.setState({
            showTab:isShow,
        })

        if(!isShow){
            this.refs.local.setNativeProps({
                style:styles.tabL
            })
            this.refs.other.setNativeProps({
                style:[styles.tabL,styles.active]
            })
        }else{
            this.refs.other.setNativeProps({
                style:styles.tabL
            })
            this.refs.local.setNativeProps({
                style:[styles.tabL,styles.active]
            })
        }

    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <Header title={'课程筛选'}></Header>
                <View style={styles.tabAll}>
                    <View style={[styles.tabL,styles.active]} ref='local'><TouchableHighlight underlayColor="#efefef"  onPress={()=>this._onTab(true)}><Text style={{textAlign:'center',color:'#2496e8'}}>本地资源</Text></TouchableHighlight></View>
                    <View style={styles.tabL} ref='other'><TouchableHighlight underlayColor="#efefef" onPress={()=>this._onTab(false)}><Text style={{textAlign:'center'}}>其他资源</Text></TouchableHighlight></View>
                </View>

                <View>
                    {this.state.showTab?<AD />:<AS />}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabAll:{
        justifyContent: 'space-around',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#efefef'
    },
    tabL:{
        width:'50%',
        paddingTop:9,
        paddingBottom:9,
        borderBottomWidth:0,
    },
    active:{
        borderStyle: 'solid',
        borderBottomWidth:1,
        borderBottomColor:'#2496e8',
    },
    liitem:{
        padding:10,
        flexDirection:'row',
        alignItems:'flex-start',
        borderStyle: 'solid',
        borderBottomWidth:1,
        borderBottomColor:'#efefef',
    },
    itemtitle:{
        width:60,
    },
    itemtext:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    itemit:{
        marginRight:10,

    },
    fle:{
        flex:1,
        flexWrap:'wrap'
    }
})