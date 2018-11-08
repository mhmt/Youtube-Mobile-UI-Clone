import React, { Component } from 'react';
import { TouchableOpacity, Text,Image ,Platform} from 'react-native';
import { Header, Left,  Right } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Color from './Color';
import { Font } from 'expo';
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFontLoaded:false
    };
  }

  componentDidMount() {
    Font.loadAsync({
      'mTradeGothic': require('../../assets/Fonts/TradeGothicLTStd-Bold.ttf'),
    }).then(()=>{
      this.setState({isFontLoaded :true});
    });
  }
  render() {
    return (
    <Header iosBarStyle='light-content' style={{borderBottomColor:Color.BackgroundDark,borderBottomWidth:0.5,backgroundColor:Color.Background}}>
        <Left style={{flexDirection:'row',alignItems:'center',alignContent:'center',marginLeft:5}}>
            <Ionicons name="logo-youtube" size={30} color="red" />
             <Text style={{fontSize:24,alignSelf:'center',fontFamily: this.state.isFontLoaded ? 'mTradeGothic': Platform.OS === 'ios'?'AppleSDGothicNeo-Light':'sans-serif', color:'white',marginLeft:5,marginTop:8}}>YouTube</Text>
        </Left>
        <Right style={{flexDirection:'row',alignItems:'center'}}>

            <TouchableOpacity><MaterialIcons name='cast-connected' size={25} color='white' style={{marginHorizontal: 8}}/></TouchableOpacity>
            <TouchableOpacity><Ionicons name ="md-videocam" size={25} color='white' style={{marginHorizontal: 8}}/></TouchableOpacity>
            <TouchableOpacity><Ionicons name ="ios-search" size={25} color='white' style={{marginHorizontal: 8}}/></TouchableOpacity>
            <TouchableOpacity><Image style={{marginHorizontal: 8,borderRadius: 13,width:26,height:26}} source={{uri:this.props.img}}/></TouchableOpacity>
        </Right>
    </Header>
    );
  }
}

export default HeaderComponent;
