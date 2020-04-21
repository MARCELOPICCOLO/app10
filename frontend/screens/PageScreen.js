import React from 'react';
import { StyleSheet, View, Text , TouchableOpacity, Alert,FlatList} from 'react-native';
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class PageScreen extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            pages :[]
        }
    }


    static navigationOptions = {
        headerTitle: <Header title='Page'/>,
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
    const pages = navigation.getParam('pages', 'no-pages')
 
    return (
      <View style={styles.container}>
    
         <View style={{position:'absolute', right:15, top: 15}}>
                <Icon name="edit" size={35} color={'#008080'}/>
         </View>
        
            <View style={styles.containerIndice}>
                    <Text style={{fontSize:15, fontWeight:'bold', color:'#008080'}}>{taskName}</Text>
            </View>

            <View style={styles.body}>
                  <Text style={{color:'#808080', fontSize: 13}}>{pages}</Text>
            </View>
      
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    containerIndice:{
        height:30,
        width:300,
         marginTop: 0, 
         color:'#008080', 
         borderBottomWidth:1, 
         borderBottomColor:'#ccc',
         paddingLeft:10,
         position:'absolute',
         top:45
   },
   body:{     
       padding:15,
       width:300,
       position:'absolute',
       top:75,
       
   }
})