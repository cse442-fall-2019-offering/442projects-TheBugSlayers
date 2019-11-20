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
    navigation
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
        var DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'First Item',
              station:this.state.location,
               lines:this.state.line, 
              timing:this.state.time,
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
              station:this.state.location,
               lines:this.state.line, 
              timing:this.state.time,
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
              station:this.state.location,
               lines:this.state.line, 
              timing:this.state.time,
            },
          ];
        return (
          <SafeAreaView style = {styles.container} >
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item 
              station={item.station}
              lines={item.lines}
              timing={item.timing}
              />}
              keyExtractor={item => item.id}
            />
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
      backgroundColor: '#b0e0e6',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
    },
  });

AppRegistry.registerComponent('Result', () => Result);