import React from 'react';
import {View,TextInput,Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import api from '../api/api'
import Buttons from '../components/Buttons'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'
import styles from '../stylesPages/styles'


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            login: '',
            password: '',
            confirmPassword:''
        };
      }

      static navigationOptions = {
        headerTitle: <Header title='Register'/>,
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

                    <View style={styles.inputContainer}>
                      <View style={{position: 'absolute', left: 0}}>
                          <Icon name='lock'  size={20}  color={'#008080'} style={{position: 'absolute', bottom: 2}}/> 
                      </View>                      
                      <View>
                        <TextInput
                              placeholder="Confirm your password"
                              onChangeText={(text) => this.setState({confirmPassword: text})}
                              value={this.state.text} secureTextEntry={this.state.show} maxLength={8}
                              style={{fontSize:13}}
                            
                                  />
                      </View>                                
                    </View>


       
                </View>
                <View style={{marginTop:35}}>
                    <Buttons color='#008080' title='Save' move={()=>Alert.alert('save success')}/>
                </View>             
            </View>
          
      );
    }
  }

 