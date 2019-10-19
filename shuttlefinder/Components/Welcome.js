import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    AppRegistry,
    Button
} from 'react-native';
import Dropdown from './searchableDropdown';
// Welcome screen for App
export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomemessage: 'Welcome to Shuttle Finder',
            location: ''
        }
    }

    static defaultprops = {
        welcomemessage: 'Welcome to Shuttle Finder',
        location: "Enter Location"
    }
_onPressButton() {
    alert('North campus shuttle is arriving soon')
}
    render() {
        return ( <View style = {styles.container} >
            <Image 
            style={styles.image}
            source={require('./ublogo.png')}
            />
            <Text style = {{padding: 50, fontSize: 25}} > {this.state.welcomemessage} </Text>  
            <Dropdown />
            < View style = {styles.buttonContainer} >
                <Button
            onPress = {
                this._onPressButton
            }
            title = "Find Nearest Shuttle"
            color = "#000000"	 />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
     buttonContainer: {
         margin: 20,
         alignItems: 'center',
         justifyContent: 'center',
     },
     image: {
        justifyContent: 'center',
        alignItems: 'center',
     }
});
AppRegistry.registerComponent('Welcome', () => Welcome);