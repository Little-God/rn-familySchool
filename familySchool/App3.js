import React, { Component } from 'react';
import {ScrollView,Text,Image,View,StyleSheet,AppRegistry,TextInput,FlatList,ImageBackground} from 'react-native';

class Greeting extends Component{
    render(){
        return (
            <Text>你是，{this.props.name}</Text>
        )
    }
}

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText: true,}

        setInterval(()=>{
            this.setState(previousState =>{
                return {showText:!previousState.showText};
            })
        },1000)
    }

    render(){
        let sty_col = this.state.showText?styles.red:styles.blue;
        return (
            <View>
                <Text>i want to say  <Text style={sty_col}>{this.props.text}</Text></Text>
            </View>

        )
    }
}
class Pizza extends Component{
    constructor(props){
        super(props);
        this.state = {text:''}
    }
    render(){
        return(
            <View style={{padding:10,flex:1,marginTop:50}}>
                <TextInput style={{height:40,width:200}} placeholder='你好，写下你想说的话' onChangeText={(text)=>this.setState({text})}/>
                <Text style={{padding:10,fontSize:42}}>{this.state.text}</Text>
            </View>
        )
    }
}

class Flatlist extends Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[{key:'夏丽'},{key:'小兰兰'}]}
                    renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

class Fetchnode extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        fetch('http://192.168.0.108:8083/lookuser')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    user: responseData.user,
                });
            })
            .done();
    }

    render() {
        if (!this.state.user) {
            return this.renderLoadingView();
        }

        var user = this.state.user[0];
        return this.renderMovie(user);
    }

    renderLoadingView()
    {
        return (
            <View>
                <Text>
                    Loading user...
                </Text>
            </View>
        );
    }

    renderMovie(user) {
        return (
            <View>
                <View>
                    <Text>{user.user_name}</Text>
                    <Text>{user.user_password}</Text>
                </View>
            </View>
        );
    }

}

export default class HelloWorldApp extends Component{
    render(){
        let pic = {
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
                <ScrollView>
                    <View  style={{alignItems: 'center'}}>
                        <Text style={{textAlign:'center',fontSize:30}}>欢迎来到，我的世界</Text>
                        <Image source={pic} style={{width:193,height:110}} />
                        <Greeting name={'小李'}></Greeting>
                        <Blink text='i love topplayer'></Blink>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width:'100%'
                        }}>
                            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        </View>
                        <Pizza></Pizza>
                        <Flatlist></Flatlist>
                        <Fetchnode></Fetchnode>
                        <Image source={require('./img/ad1.jpg')} />
                        <ImageBackground source={require('./img/banner.png')} style={{width:'100%',height:200,color:'#000'}}>
                            <Text>123</Text>
                        </ImageBackground>
                    </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    red:{
        color:'red',
    },
    blue:{
        color:'#0066CC',
    },
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    },

})

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
