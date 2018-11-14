import React, { Component } from 'react';
import { View, Text ,Image,ImageBackground} from 'react-native';
import Color from './Color';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Left, Right } from 'native-base';

class PostTextImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
       deviceWidth : Dimensions.get('window').width
    };
  }
  

  /*
     {
        id:"-IFCo3J3rWs",
        thumbnail:"https://i.ytimg.com/vi/-IFCo3J3rWs/maxresdefault.jpg",
        title:"I have a Question For You",
        channelImg:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
        channelName: "My Self Reliance",
        views:"78 B görüntüleme",
        seen:false,
        ago: '7 saat önce',
        duration:"10:38"
      }
  */

  render() {
    return (
    <View style={[{justifyContent: 'center',marginVertical:5},this.props.style]}>

       <ImageBackground source={{uri:this.props.item.thumbnail}} style={{height:260,width:100+'%', justifyContent:'flex-end',alignItems:'flex-end'}}>
            <Text style={{backgroundColor:'black',opacity:0.8, color:'white',margin:10,paddingHorizontal:5,paddingVertical:2}}>{this.props.item.length}</Text>
        </ImageBackground>

        <View style={{flexDirection:'row',padding:10}}>
    {/*<Image style={{width:50,height:50,borderRadius:25}} source={{uri: this.props.item.profileImg}} />*/}
            <View style={{marginLeft:5,padding:5,width:(this.state.deviceWidth-50-30)}}>
                <Text style={{color:'white',width:'100%'}}>{this.props.item.title}</Text>
                <Text style={{color: Color.TintColor,marginTop:3}}>{this.props.item.channelName} · {this.props.item.meta} </Text>
            </View>
            <Ionicons name="md-more" size={30} color={Color.TintColor} style={{alignSelf: 'flex-start',marginTop:5,marginRight:5}}/>

        </View>

    </View>
    );
  }
}

export default PostTextImg;
