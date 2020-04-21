import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet,TextInput, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'
import HeadBar from '../components/HeadBar'



export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state={
      dados:[
              {
                  taksName: "Estudar ingles", 
                  dateAt: "03-abril-2020",
                  desc:"Revisar o conteudo de ingles da fatec vol.2 e v.3",
                  pages:[
                        {Title: "Revisao Ingles II - Present ", text:`Maioria dos verbos: acrescenta-se –s`},
                        {Title: "Revisao Ingles II - Verbs ", text:` We pass (Nós passamos)They wash (Eles/elas lavam)`},
                        {Title: "Revisao Ingles II - Simple Past",text:`They live (Eles moram)We talk (Nós falamos)You read (Você lê)`} 
                      ]
              },
              //other
              
            ]
    }
  }

 
  static navigationOptions = {
    headerTitle: <Header title='My Books'/>,
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
  
      return (
        <View style={styles.container}>
          <View>
                <HeadBar/>
          </View>
   
          <View style={styles.body}>

          <FlatList
                data={this.state.dados}
                renderItem={({ item }) => {
                return(
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Book',{taskName: item.taksName, dateAt: item.dateAt, desc: item.desc, pages: item.pages})}>
                    <View style={styles.containerTaks}>
                      <View style={styles.Titletask}>
                          <Text style={{color:'#fff', paddingLeft: 10, fontSize:13, fontWeight:'bold'}}>{item.taksName}</Text>
                          <View style={{position:'absolute', right: 10}}>
                            <Text style={{fontSize:13, color:'#fff'}}>{item.dateAt}</Text>
                          </View>
                          
                      </View>

                     
                        <View style={{flex:6, paddingLeft:10, paddingTop: 5}}>
                          <Text style={{fontSize:12, color:'#808080'}}>{item.desc}</Text>
                        </View>
                     

                      <View style={{flex:2, flexDirection:'row', justifyContent:'flex-end', alignItems: 'flex-end', marginRight:5}}>
                        <TouchableOpacity onPress={()=>Alert.alert('edit')}>
                            <View style={{position:'relative',marginRight:3,marginBottom: 10}}>
                                  <Icon name='edit' size={35} color={'#008080'}/>
                            </View> 
                        </TouchableOpacity>
                                             
                      </View> 

                    </View>
                    </TouchableOpacity>)
                }}
                keyExtractor={item => item.taskName}
              />
          </View>      
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#fff'
    },
    menuBar:{
      flexDirection:'row',
      flex:1.5,
      justifyContent: 'center',
      alignItems:'center',  
 
    },
    Titletask:{
       flex:2, 
       borderBottomWidth:1,
        borderBottomColor:'#A9A9A9',
        backgroundColor:'#008080', 
        flexDirection:'row',
        height:80,
        paddingBottom:2

      },
    body:{
      flex:8.5,
      justifyContent:'center',
      alignItems:'center',
      marginTop:80
    },
    symbol:{
      flexDirection:'row',
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      right:10

    },
    containerInput:{
      width:200,
      height:30,
      borderBottomWidth:1,
      borderBottomColor:'#008080',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:45,
      fontSize:5
    },
    containerTaks:{
      flex:1,
      height:110,
      width:300,
      borderColor:'#C0C0C0',
      borderWidth:0.5,
  // backgroundColor:'#F5F5F5',
      marginTop:20
    }
  })