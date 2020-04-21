import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet,TextInput, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'


export default class HeadBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.menuBar}>
                    <View style={styles.containerInput}>
                        <TextInput placeholder='Type your Tasks here' style={styles.TextBoxInput}></TextInput>  
                    </View>
                    <View style={styles.containerSearch}>
                        <Icon name='search' size={25} color={'#008080'} />
                    </View>                                   
                
                    <View style={styles.symbol}>
                            <TouchableOpacity onPress={()=>Alert.alert('clicked-me')}> 
                                <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                                    <View style={{flex:4, width:30, alignItems:'flex-end', justifyContent:'flex-end'}}>
                                        <Icon name='plus' size={10} color={'#008080'}/>
                                    </View>
                                    <View style={{flex:6}}>
                                        <Icon name='book' size={30} color={'#008080'}/>
                                    </View>
                                </View>  
                            </TouchableOpacity>         
                    </View>
                </View>
          </View>

        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    TextBoxInput: {
        fontSize:13,
        borderBottomWidth:1,
         borderBottomColor:'#008080', 
         width:200,
         paddingBottom:5
    },
    menuBar:{
        flexDirection:'row',
        flex:1,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15
      },
    containerSearch:{
        flex:1.5,
        height:50,
        justifyContent:'flex-end',
        alignItems:'center',
      
    },
      symbol:{
        flexDirection:'row',
        flex:1.5,
        height:50,
        justifyContent:'center',
        alignItems:'center',
       
      },
      containerInput:{
          flex:7,
          width:100,
          height:50,
          justifyContent:'flex-end',
          alignItems:'flex-start',
      }


})

