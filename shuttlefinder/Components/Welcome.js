import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    AppRegistry
} from 'react-native';
// Welcome screen for App
export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomemessage: 'Welcome to Shuttle Finder',
            location: "Enter Location"
        }
    }

    static defaultprops = {
        welcomemessage: 'Welcome to Shuttle Finder',
        location: "Enter Location"
    }

    render() {
        return ( <View style = {styles.container} >
            <Text style = {{padding: 50, fontSize: 25}} > {this.state.welcomemessage} </Text>  
            <TextInput style = {{padding: 70, fontSize: 15}} > {
                this.state.location
            } </TextInput> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});
AppRegistry.registerComponent('Welcome', () => Welcome);