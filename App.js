import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from 'native-base';
import MainTabNavigator from './src/Navigation/MainTabNavigator';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    
    return (
      <Root>
        <MainTabNavigator/>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
