import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from 'native-base';
import MainTabNavigator from './src/Navigation/MainTabNavigator';
import NavigationStack from './src/Navigation/NavigationStack';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    //  <MainTabNavigator/>
    return (
      <Root>
        <NavigationStack/>
      
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
