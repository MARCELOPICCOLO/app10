
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class LogoTitle extends React.Component {
    render() {
      return (
       <View style={styles.container}>
           <Text style={styles.text}>{this.props.title}</Text>
       </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         
      },
      text:{
        color:'#fff',
        fontSize:20,
        fontWeight: 'bold'
      }
  })