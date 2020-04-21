import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import BookScreen from './screens/BookScreen'
import PageScreen from './screens/PageScreen'
import RegisterScreen from './screens/RegisterScreen'


export default class App extends React.Component {
  render() {
    return (
          <RootStack />  
    );
  } 
}


const RootStack = createStackNavigator({
    Home: HomeScreen, 
    Login: LoginScreen,
    Book: BookScreen,
    Page: PageScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Login'
  }
);

