import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Buttons extends React.Component{
    render(){
        return(
            <View>
                  <TouchableOpacity  onPress={this.props.move}>
                    <View style={[styles.button,{backgroundColor:this.props.color}]}>
                        <Text style={styles.textButton}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width: 200,
        height: 50,
        marginTop: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textButton:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',  
      }

})