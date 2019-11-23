import React, {
    Component
} from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    View,
    Image,
    TextInput,
    AppRegistry,
    Button, navigation,
    Switch
} from 'react-native';
import Dropdown from './searchableDropdown';
import ADateTimePicker from "react-native-modal-datetime-picker";
import * as Green from '../Shuttle_Data/Green_Line.json';
import * as North from '../Shuttle_Data/North_Shuttle.json';
import * as Blue from '../Shuttle_Data/Blue_Line.json';
import * as Northweekend from '../Shuttle_Data/North_Shuttle_Weekend.json';


exports.realTime = () => {
    var d = new Date();
    var retTime = ((d.getHours()) * 100) + d.getMinutes();
    return retTime;
}

exports.getTime = (time, selectedLocation,selectedLine) => {
    var foundTime = [];
    var jsonfile='';
    var dayHelper = new Date().getDay();
   // Chooses jsonfile according to selectedline 
    if(selectedLine=='Blue'){
            jsonfile=Blue;
    }
    else if(selectedLine=='Green'){
    jsonfile=Green;
    }
    else if(dayHelper == 0 || dayHelper == 6 && selectedLine == 'North'){
        jsonfile = Northweekend;
    }
    else if(dayHelper != 0 || dayHelper != 6 && selectedLine == 'North'){
        jsonfile = North;
    }
    
    for (var key in jsonfile) {

        var t2 = parseInt((jsonfile[key][selectedLocation]));

       // console.log(t2);
        if (time < t2) {
            console.log("Found next time " + t2);
            foundTime.push(t2);
            if(foundTime.length==4)
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
            currentLine: '',
            switchValue: false,
            isDateTimePickerVisible: false,
            chosenTime:0,
        }
    }
    showDateTimePicker = () => {
        this.setState({
            isDateTimePickerVisible: true,
        });
    };

    hideDateTimePicker = () => {
        this.setState({
            isDateTimePickerVisible: false,
        });
        console.log(this.state.switchValue)
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        var retTime = ((date.getHours()) * 100) + date.getMinutes();
        this.setState({
            chosenTime:retTime
        });
        
        this.hideDateTimePicker();
    };

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
        backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headertitleStyle: {
        fontWeight: 'bold',
        textAlign:"center", 
        flex:1 
        },
        };
    getLocation = l => {
        //console.log(l + 'aaa');
        this.setState({
            currentLocation: l
        });
    }
    getLine = line => {
        console.log(line + 'abc');
        this.setState({
            currentLine: line
        });
    } 

    static defaultprops = {
        welcomemessage: 'Welcome to Shuttle Finder',
        location: "Enter Location"
    }
    toggleSwitch = value => {
        //onValueChange of the switch this function will be called
        this.setState({
            switchValue: value
        });
        if(value)
            this.showDateTimePicker();

        //state changes according to switch
        //which will result in re-render the text
    };
    onCancel = ()=>{
        this.setState({
            isDateTimePickerVisible: false,
            switchValue:false
        });
        
    }
    _onPressButton() {
        console.log(this.state.currentLocation + 'a');
        if(this.state.switchValue){
            var t=this.state.chosenTime;
        }else{
        var t = exports.realTime();
        }
        var times = exports.getTime(t, this.state.currentLocation,this.state.currentLine);

        if (this.state.currentLocation != ''){
            this.props.navigation.navigate('Results', {
                location: this.state.currentLocation,
                line: this.state.currentLine,
                time: times
            })
        }
        else{
            alert('Enter a location first please!')
        }
        
        this.state.currentLocation = '';
   
    }

    render(){
        const {navigate} = this.props.navigation;
        let props ={
            getCurrentLine: this.getLine.bind(this),
            getCurrentLocation: this.getLocation.bind(this),
            
        }
        return(         
            <KeyboardAvoidingView 
            style = {styles.container}
            behavior = "padding"
            >
            <Image style = {
                styles.image
            }
            source = {
                require('./ublogo.png')
            }
            /> 
            <Text style = {{
                    padding: 50,
                    fontSize: 25,
                    textAlign: 'center',
                }
            }> 
                {
                this.state.welcomemessage
                } 
            </Text>   
            <Dropdown {...props}/>
            <Text style ={{
                padding:10,
                fontSize:14,
                textAlign:'center'
            }
            }> Search Later Shuttle Times </Text>
            <Switch onValueChange={this.toggleSwitch}

            value = {this.state.switchValue}
            />
            <ADateTimePicker
            isVisible = {
                this.state.isDateTimePickerVisible
            }
            onConfirm = {
                this.handleDatePicked
            }
            onCancel = {
                this.onCancel
            }
            mode={'time'}
            titleIOS='Pick a Time'
            date= {new Date()}
            />
            <View style = {
                styles.buttonContainer
            }>
            <Button style = {
                styles.buttonContainer
            }
            onPress = {
                this._onPressButton.bind(this)
            }
            title = "Find Nearest Shuttle"
            color = "#fff" />
            </View>
            </KeyboardAvoidingView>
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
        backgroundColor: '#005bbb',
        borderColor: '#fff'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
AppRegistry.registerComponent('Welcome', () => Welcome);