import React, { Component } from 'react';
import {
    StackNavigator
} from 'react-navigation';
import {AppRegistry,Button} from 'react-native';



class MainScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Welcome to 袁家窝棚',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to tom's profile"
                onPress={() =>
                    navigate('Main', { name: 'tom' })
                }
            />
        );
    }
}
const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});
export default class Demo extends Component {

    render() {
        return (
            <App />
        );
    }
}
AppRegistry.registerComponent('Demo', () => Demo);