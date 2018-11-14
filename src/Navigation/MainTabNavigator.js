import React from "react";
import {createBottomTabNavigator} from "react-navigation";
import { Image,StyleSheet} from 'react-native';
import  Home  from "../Screens/Home";
import Subscriptions from "../Screens/Subscriptions";
import { Icon } from "native-base";
import { Ionicons,Octicons,MaterialIcons } from '@expo/vector-icons';
import Color from "../Components/Color";
import Library  from "../Screens/Library";



export default  Tab = createBottomTabNavigator({
    AnaSayfa:{
        screen: Home,
        navigationOptions: {
            title:"Ana Sayfa",
            tabBarIcon: ({ tintColor }) => <Ionicons size={25} color={tintColor} name="md-home"/>
        }
    },
    Kesif:{
        screen: Home,
        navigationOptions: {
            title:"Keşif",
            tabBarIcon: ({ tintColor }) =>  <MaterialIcons size={25} color={tintColor} name="explore"/>
        }
    },
    Abonelikler:{
        screen: Subscriptions,
        navigationOptions: {
            title:"Abonelikler",
            tabBarIcon: ({ tintColor }) =>   <MaterialIcons size={25} color={tintColor}  name="subscriptions"/>
        }
    },
    GelenKutusu:{
        screen: Subscriptions,
        navigationOptions: {
            title:"Gelen Kutusu",
            tabBarIcon: ({ tintColor }) =>   <MaterialIcons size={25} color={tintColor}  name="mail"/>
        }
    },
    Kitaplik: {
        screen: Library,
        navigationOptions: {
            title:"Kitaplık",
            tabBarIcon: ({ tintColor }) => <Octicons size={25} color={tintColor}  name="file-directory"/>
        }
    }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        showLabel:true,
        activeBackgroundColor: Color.Background,
        inactiveBackgroundColor:Color.BackgroundDark,
        tintColor:'#a9a9a9',
        activeTintColor:'#fdfdfd'
    }
   
});

const styles = StyleSheet.create({
    size25:{
        width:25,
        height:25,
        margin: 5,
        color:'white'
    },
    size30:{
        width:30,
        height:30,
        margin: 5
    }
});