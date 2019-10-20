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
import * as data from '../Shuttle_Data/Blue_Line.json';

exports.realTime = () => {
    var d = new Date();
    var retTime = ((d.getHours()) * 100) + d.getMinutes();
    return retTime;
}

exports.getTime = (time, selectedLocation) => {
    var foundTime = '';
   // var time = realTime();
    for (var key in data) {

        var t2 = parseInt((data[key][selectedLocation]));

        console.log(t2);
        if (time < t2) {
            console.log("Found next time " + t2);
            foundTime = t2;
            console.log(t2);
            break;
        }
    }

    return foundTime;
}

// Welcome screen for App
export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomemessage: 'Welcome to Shuttle Finder',
            location: '',
            currentLocation: '',
            selectedItem: {},
        }
    }

    getLocation = l => {
        console.log(l + 'aaa');
        this.setState({
            currentLocation: l
        });
    }

    static defaultprops = {
        welcomemessage: 'Welcome to Shuttle Finder',
        location: "Enter Location"
    }
    _onPressButton() {
        console.log(this.state.currentLocation + 'a');

        var t = exports.realTime();
        var times = exports.getTime(t, this.state.currentLocation);

        if (this.state.currentLocation != ''){
            alert('Blue line shuttle is arriving soon at ' + times);
        }
        else{
            alert('Enter a location first please!')
        }

        
    }
    render(){
        return( 
            <View style = {styles.container} >
            <Image style = {
                styles.image
            }
            source = {
                require('./ublogo.png')
            }
            /> 
            <Text style = {{
                    padding: 50,
                    fontSize: 25
                }
            }> 
                {
                this.state.welcomemessage
                } </Text>   
                <Dropdown getCurrentLocation = 
                {
                    this.getLocation.bind(this)
                }/> 
            <View style = {styles.buttonContainer} >
            <Button style = {
                styles.buttonContainer
            }
            onPress = {
                this._onPressButton.bind(this)
            }
            title = "Find Nearest Shuttle"
            color = "#ffffff" />
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
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#4966C4',
        borderColor: '#4966C4'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
AppRegistry.registerComponent('Welcome', () => Welcome);