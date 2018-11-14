import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { Text, View,TouchableOpacity ,ImageBackground,Image} from 'react-native'
import { Container, Header, Left, Right, Content, List, ListItem } from 'native-base';
import Color from '../Components/Color';
import { Font } from 'expo';
import HeaderComponent from '../Components/Header'
import Data from '../Components/Data';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Images from '../Components/Image';
import Ionicons from '@expo/vector-icons/Ionicons';

class Account extends Component {
    static navigatorStyle = {
        disabledBackGesture: true
      };
  constructor(props) {
    super(props);
    this.state = {
        isFontLoaded:false,
        profile: "https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",

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
        <Container style={{backgroundColor:Color.Background}}>
            <ImageBackground style={{height:155,width:'100%',paddingTop: 20}} source={Images.bg}>
                <View stye={{margin: 10,}}>
                    <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                     
                     <TouchableOpacity onPress={()=> this.props.navigation.goBack()}><Ionicons name="ios-close" size={36} color="white" /></TouchableOpacity>
                     <Text style={{color:'white',fontSize:18, marginLeft:15,marginTop:8}}>Hesap</Text>
                    </View>
                    <Image style={{height:36,width:36,borderRadius:18, borderColor:'transparent',marginLeft:10,marginTop:12}} 
                           source={{uri:Data.stories[2].img}}/>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{color:'white',fontSize:14, marginLeft:15,marginTop:3}}>Teknoseyir</Text>
                     <Ionicons name="ios-arrow-down" size={18} color="white" style={{marginTop:8,marginLeft:5}}/> 
                    </View>

                </View>

            </ImageBackground>

            <Content style={{backgroundColor:Color.Background}} scrollEnabled={false}>
                <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10}}>     
                        <Entypo name="folder-video" size={30} color={Color.TintColor} />
                         <Text style={{color:'white',marginLeft:10}}> Videolarım</Text>
                    </View>  
                </TouchableOpacity>

                 <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10}}>     
                        <Ionicons name="ios-settings" size={40} color={Color.TintColor} />
                         <Text style={{color:'white',marginLeft:10}}> Ayarlar</Text>
                    </View>  
                </TouchableOpacity>

            </Content>

        </Container>
    );
  }
}

export default Account;
