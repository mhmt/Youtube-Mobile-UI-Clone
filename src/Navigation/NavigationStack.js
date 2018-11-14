
import {createStackNavigator} from "react-navigation";

import MainTabNavigator from './MainTabNavigator'
import Account from "../Screens/Account";
import { fromTop } from 'react-navigation-transitions';


export default  RootStack  = createStackNavigator(
    {
      Tab: MainTabNavigator,
      Account: Account
    },
    {
      initialRouteName: 'Tab',
      headerMode: 'none',
      transitionConfig: ()=>fromTop(450),
      navigationOptions: {
        headerVisible: false,
        gesturesEnabled: false,
      }
    }
  ); 

