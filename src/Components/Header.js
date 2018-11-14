import React, { Component } from 'react';
import { TouchableOpacity, Text,Image ,Platform} from 'react-native';
import { Header, Left,  Right , Button,Input,Item,Icon} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Color from './Color';
import { Font } from 'expo';
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFontLoaded:false,
        searchActivated:false
    };
  }

  componentDidMount() {
    Font.loadAsync({
      'mTradeGothic': require('../../assets/Fonts/TradeGothicLTStd-Bold.ttf'),
    }).then(()=>{
      this.setState({isFontLoaded :true});
    });
  }

  getNormalHeader(){
    return(
    <Header iosBarStyle='light-content' style={{borderBottomColor:Color.BackgroundDark,borderBottomWidth:0.5,backgroundColor:Color.Background}}>
        <Left style={{flexDirection:'row',alignItems:'center',alignContent:'center',marginLeft:5}}>
            <Ionicons name="logo-youtube" size={30} color="red" />
             <Text style={{fontSize:24,alignSelf:'center',fontFamily: this.state.isFontLoaded ? 'mTradeGothic': Platform.OS === 'ios'?'AppleSDGothicNeo-Light':'sans-serif', color:'white',marginLeft:5,marginTop:8}}>YouTube</Text>
        </Left>
        <Right style={{flexDirection:'row',alignItems:'center'}}>

            <TouchableOpacity><MaterialIcons name='cast-connected' size={25} color='white' style={{marginHorizontal: 8}}/></TouchableOpacity>
            <TouchableOpacity><Ionicons name ="md-videocam" size={25} color='white' style={{marginHorizontal: 8}}/></TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({searchActivated:true})}><Ionicons name ="ios-search" size={25} color='white' style={{marginHorizontal: 8}}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{ if(typeof this.props.navigation !== 'undefined') this.props.navigation.navigate("Account")}}><Image style={{marginHorizontal: 8,borderRadius: 13,width:26,height:26}} source={{uri:this.props.img}}/></TouchableOpacity>
        </Right>
    </Header>
    )
  }

  getSearchHeader(){
    return(
      <Header searchBar rounded iosBarStyle='light-content' style={{borderBottomColor:Color.BackgroundDark,borderBottomWidth:0.5,backgroundColor:Color.Background,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=> {return this.setState({searchActivated:false})}}
            style={{marginHorizontal:10}}><Ionicons name={Platform.OS === "ios" ? "ios-arrow-back":"md-arrow-back"} size={25} color="white"/></TouchableOpacity>
        <Input style={{width:180, marginHorizontal:10,color:'white' }}  placeholder="YouTube'da ara" />
        <Button transparent onPress={()=> null}>
          <MaterialIcons name={"keyboard-voice"} size={25} color="white" /> 
        </Button>
      
      </Header>
      )
  }

  render() {
    return (
      (this.state.searchActivated) ? this.getSearchHeader(): this.getNormalHeader()
    );
  }
}

export default HeaderComponent;
