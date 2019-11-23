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
    Linking,
    TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';


  
  function Item({ station, lines, timing}) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{station}</Text>
        <Text style={styles.title}>{lines}</Text>
        <Text style={styles.title}>{timing}</Text>
      </View>
    );
  }
  
function gettracker(lineinfo){
    switch (lineinfo) {
      case 'Blue':
        return 'http://busviewer.insightmobiledata.com/Default.aspx?Key=b3crlhss89uJlssllWef8';
      case 'North':
        return 'http://busviewer.insightmobiledata.com/Default.aspx?Key=b3crlhss8kuJissllWef8';
    }
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
      onPress = () => {
        Linking.openURL(gettracker(this.state.line))
      }
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
          if((this.state.line == 'Blue' || this.state.line == 'North') && timearray.length != 0) {
            tracker = <Button style = {
                styles.item
              }
              onPress = {
                this.onPress
              } 
              title = "Track it"></Button>;
            }else{
              tracker=null;
            }   
        
        return (
          <SafeAreaView style = {styles.container} >
            <FlatList
              data={DATA}
              renderItem={({ item }) =>
              <Item 
              station={item.station}
              timing={item.timing}
              />
            }
            keyExtractor = {
              item => item.id
            }
            />
            {tracker}
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
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#005bbb',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
    }, buttonContainer: {
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: '#68a0cf',
      borderColor: '#fff'
    },
    title: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center'
    },
    trackButton: {
      fontSize: 24,
      color: '#fff',
      textAlign: 'center'
    }
  });

AppRegistry.registerComponent('Result', () => Result);