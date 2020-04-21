import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeadBar from '../components/HeadBar'


export default class Book extends React.Component { 
    constructor(props){
        super(props)
        this.state={
            pages:[]
        }
    }

    static navigationOptions = {
        headerTitle: <Header title='Index'/>,
        headerStyle: {
          backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <TouchableOpacity onPress={()=>Alert.alert('clicked')}>
            <View style={{alignItems: 'center', justifyContent: 'center', marginRight:15}}>
              <Icon name='user' size={20} color={'#fff'}/>
            </View>  
          </TouchableOpacity>
        
        )
      }; 

  render() {
    const { navigation } = this.props;
    const taskName = navigation.getParam('taskName', 'no-task');
    const pages = navigation.getParam('pages', 'no-page')
    

     

    return (
      <View style={styles.container}>
          <View>
                <HeadBar/>
          </View>
         

         <View style={{justifyContent:'center', alignItems: 'center'}}>  
            <View style={styles.containerIndice}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'#008080'}}>{taskName}</Text>
            </View>
            <FlatList
                data={pages}
                renderItem={({ item ,index}) =>{ 
                    return(
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page',{taskName: item.Title, pages: item.text })}>
                        <View style={styles.contaninerPage}>
                            <Text style={{color:'#808080', fontSize: 13}}>{item.Title}</Text>  
                            <Text style={{position:'absolute', right:15, color:'#808080', fontSize: 13}}>pag.{index+1}</Text>                
                        </View>   
                      </TouchableOpacity>          
                    )}}
                keyExtractor={item => item.id}
            />
         </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    contaninerPage:{
        width:300,
        flexDirection: 'row',
        borderWidth:0.5, 
        borderColor:'#ccc',
        height: 50,
        alignItems: 'center',
        paddingLeft: 10,
        marginTop:10,
        borderRadius: 10,
        paddingRight: 15
     },
     containerIndice:{
         height:30,
         width:300,
         flexDirection:'row',
          marginTop: 80, 
          color:'#008080', 
          justifyContent:'flex-start',
          alignItems:'flex-end',
          paddingLeft:10,
          paddingBottom: 5,
    },

     
    
})