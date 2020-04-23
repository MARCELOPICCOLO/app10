import React from 'react';
import {View,TextInput,Text,TouchableOpacity, Alert, Button } from 'react-native'
import api from '../api/api'
import Buttons from '../components/Buttons'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'
import styles from '../stylesPages/styles'
import axios from 'axios'


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            email: '',
            password: '',
            data:[],
            logged: false,
        };
      }

      static navigationOptions = {
        headerTitle: <Header title='Login'/>,
        headerStyle: {
          backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }; 

     async componentDidMount(){

        /*const baseUrl='http://192.168.0.105:3000/api/wrdocs/'
        const user = await axios.get(baseUrl)
        this.setState({data: user.data})*/

        /*const baseUrl='http://192.168.0.105:8081/api/wrdocs'
        const user = await axios.get(baseUrl)
        this.setState({data: user.data})*/

       /* const user = await axios.get('http://192.168.0.105:3000/api/wrdocs/user')
        this.setState({user:user.data})*/

      // this.setState({data: this.login()})


        
        
      }

      isLogged = () =>{
        this.setState({logged : !this.state.logged})
        Alert.alert(''+this.state.logged)
      }


      login = async() =>{

        // if(this.state.email && this.state.password){
           const baseUrl='http://192.168.0.105:3000/api/wrdocs/login'
           const user = await axios.post(baseUrl,{email: this.state.email, password: this.state.password})
          if(user.data){
            Alert.alert('usuario logged')
           this.props.navigation.navigate('Home')
          }
        // }
   
       }
    
    
      /*save = async () =>{
          await api.post('/',this.state.car).then(()=>{
            Alert.alert('Salvou')
          }).catch((err)=>{
              Alert.alert(err)
          })
      }*/

      showPassword = () =>{
      
            this.setState({show: !this.state.show})        
      }

    render() {
      return (
          
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff'}}> 
         
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', bottom: 2}}>
                    <Icon name='book' size={40} color={'#008080'} style={{margin:2}}/>
                    <Text style={{fontSize:24, marginLeft: 10, fontWeight: 'bold', color:'#008080'}}>WRDOCS</Text>
                </View>
           
                <View>
                    <View style={styles.inputContainer}>
                      <View style={{position:'absolute',left:0}}>
                        <Icon name='user' size={20} color={'#008080'} style={{position:'absolute', bottom: 2}}/> 
                      </View>
                       <View>
                       <TextInput
                                placeholder="Type here your email"
                                onChangeText={(text) => this.setState({email : text})}
                                value={this.state.text} maxLength={30}
                            />
                       </View>                   
                    </View>
               
                    <View style={styles.inputContainer}>
                      <View style={{position: 'absolute', left: 0}}>
                          <Icon name='lock'  size={20}  color={'#008080'} style={{position: 'absolute', bottom: 2}}/> 
                      </View>                      
                      <View>
                        <TextInput
                              placeholder="Type here your password"
                              onChangeText={(text) => this.setState({password: text})}
                              value={this.state.text} secureTextEntry={this.state.show} maxLength={8}
                              style={{fontSize:13}}
                            
                                  />
                      </View>
                      <TouchableOpacity onPress={this.showPassword}>  
                          <View style={styles.containerIcon}>
                              <Icon name={this.state.show ? 'eye-slash' : 'eye'} size={20}  color={'#008080'}/>    
                          </View>                                                           
                       </TouchableOpacity>                
                    </View>
       
                </View>
               
                <View style={{marginTop:35}}>
                      <TouchableOpacity onPress={this.login}>
                          <View style={{width:200,height:50, backgroundColor:'#008080', alignItems:'center', justifyContent:'center', borderRadius:50}}>
                                <Text style={{color:'#fff', fontSize:17, fontWeight:'bold'}}>Sign in</Text>
                          </View>

                      </TouchableOpacity>                              
                </View>
               
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                  <View>
                       <Text style={styles.TextRegister}>Register</Text>  
                  </View>  
                </TouchableOpacity>  
               
            </View>
         
          
      );
    }
  }

 