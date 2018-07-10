import React, { Component } from 'react';
import {ScrollView,Text,Image,View,StyleSheet,AppRegistry,TextInput,FlatList,ImageBackground,TouchableHighlight,TouchableOpacity} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
class GongMenu extends Component{
    render(){
        return(
            <View style={styles.noticeContent1}>
                <View style={[styles.flex_sb, styles.bb_l,styles.h50]}>
                    <View style={styles.flex}>
                        <View style={styles.line}></View>
                        <Text>功能菜单</Text>
                    </View>
                    <Text>更多 ></Text>
                </View>
                <View style={[styles.flex_sa,styles.h70]}>
                    <View style={styles.item}>
                        <View style={styles.menuItem}><Text style={styles.miText}><Text><Icon name='commenting' size={20} /></Text></Text></View>
                        <Text style={styles.itemt}>我的消息</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.menuItem}><Text style={styles.miText}><Text><Icon name='bullhorn' size={20} /></Text></Text></View>
                        <Text style={styles.itemt}>班级公告</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.menuItem}><Text style={styles.miText}><Text><Icon name='edit' size={20} /></Text></Text></View>
                        <Text style={styles.itemt}>班级作业</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.menuItem}><Text style={styles.miText}><Text><Icon name='book' size={20} /></Text></Text></View>
                        <Text style={styles.itemt}>我的工作坊</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.menuItem}><Text style={styles.miText}><Text><Icon name='heart' size={20} /></Text></Text></View>
                        <Text style={styles.itemt}>关注我的</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.menuItem}><Text style={styles.miText}><Text><Icon name='users' size={20} /></Text></Text></View>
                        <Text style={styles.itemt}>关注老师</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default class HelloWorldApp extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1,backgroundColor:'#f7f7f7'}}>
                <Image source={require('../../../img/shuijiao.jpg')} style={styles.banner}/>
                <View style={styles.noticeContent}>
                    <View style={[styles.flex_sb, styles.bb_l]}>
                        <View style={styles.flex}>
                            <View style={styles.line}></View>
                            <Text>通知公告</Text>
                        </View>
                        <Text onPress={() =>
                            navigate('NoticeList', { name: 'NoticeList' })
                        }>更多 ></Text>
                    </View>
                    <View style={[styles.flex_sb, styles.bb_s]}>
                        <Text>省：教育部批准二中王老师为校长</Text>
                        <Text> ></Text>
                    </View>
                    <View style={[styles.flex_sb, styles.bb_s]}>
                        <Text>县：县级第二中学食堂修整</Text>
                        <Text> ></Text>
                    </View>
                    <View style={[styles.flex_sb, styles.bb_l]}>
                        <Text>班：关于家长和学生如何共处</Text>
                        <Text> ></Text>
                    </View>
                </View>
                <GongMenu></GongMenu>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    header:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    banner:{
        width:'100%',
        height:150,

    },
    noticeContent:{
        height:150,
        backgroundColor:'#fff',
        marginTop:20
    },
    noticeContent1:{
        height:180,
        backgroundColor:'#fff',
        marginTop:20
    },
    flex:{
        flex:1,
        alignItems:'center',
        flexDirection: 'row'
    },
    flex_sb:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        paddingRight:5
    },
    line:{
        width:5,
        height:20,
        backgroundColor:'#3bd1fc',
        marginRight:5
    },
    bb_s:{
        marginLeft:20,
        borderBottomColor:'#efefef',
        borderStyle:'solid',
        borderBottomWidth:1
    },
    bb_l:{
        paddingLeft:20,
        borderBottomColor:'#efefef',
        borderStyle:'solid',
        borderBottomWidth:1
    },
    flex_sa:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    menuItem:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:'#17c095',
        marginLeft:'auto',
        marginRight:'auto'
    },
    miText:{
        textAlign:'center',
        color:'#fff',
        lineHeight:40,
    },
    h50:{
        flex:1
    },
    h70:{
        flex:3,
        marginTop:10
    },
    item:{
        width:'25%'
    },
    itemt:{
        textAlign:'center'
    }


})

