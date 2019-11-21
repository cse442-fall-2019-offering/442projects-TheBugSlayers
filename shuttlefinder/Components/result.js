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
    Button,
    SafeAreaView, 
    FlatList,
    navigation,
    Linking
} from 'react-native';
import Constants from 'expo-constants';


  
  function Item({ station, lines, timing }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{station}</Text>
        <Text style={styles.title}>{lines}</Text>
        <Text style={styles.title}>{timing}</Text>
      </View>
    );
  }

export default class Result extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            location:this.props.navigation.state.params.location,
            line:this.props.navigation.state.params.line,
            time:this.props.navigation.state.params.time,
        };
        console.log("a" +this.props.navigation.state.params.location);
    }
    
    static navigationOptions = {
        title: "Results",
        headerStyle: {
        backgroundColor: "#fff"
        }
    };
      
    render(){
        const { navigation } = this.props;
        var DATA=[];
        timearray=this.state.time;
        if(timearray.length==0){
          DATA.push({
            id: '0',
            station: this.state.location,
            timing: 'No pickup until tomorrow',
          })
        }
        for(i=0;i<timearray.length;i++){
          DATA.push({
          id: i.toString(),
          station: this.state.location,
          timing: this.state.time[i],
          });
        }
        return (
          <SafeAreaView style = {styles.container} >
            <FlatList
              data={DATA}
              renderItem={({ item }) => 
              <Item 
              station={item.station}
              timing={item.timing}
              />}
              keyExtractor={item => item.id}
            />
            <Text style = {
              {
                color: 'blue'
              }
            }
            onPress = {
                () => Linking.openURL('http://google.com')
              } >
              Google
            </Text>
          </SafeAreaView>
        );

      }
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      //  marginRight: 40,
      //  marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center'
    },
  });

AppRegistry.registerComponent('Result', () => Result);