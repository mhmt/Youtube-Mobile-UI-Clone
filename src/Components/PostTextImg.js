import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';
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
        type:1, // Fotoğraflı Yazı Post
        data:{
            profileImg:"",
            text: "",
            photo: "",
            channelName:"",
            time:"",
            likes:0,
            dislikes:0,
            comments:0
        }
    }
  */

  render() {
    return (
    <View style={{justifyContent: 'center',borderColor:Color.BackgroundDark,borderBottomWidth:1,marginVertical:5}}>
        <View style={{flexDirection:'row',padding:10}}>
            <Image style={{width:50,height:50,borderRadius:25}} source={{uri: this.props.item.profileImg}} />
            <View style={{marginLeft:5,padding:5,width:(this.state.deviceWidth-50-20)}}>
                <Text style={{color:'white',width:'100%'}}>{this.props.item.text}</Text>
                <Text style={{color: Color.TintColor,marginTop:3}}>{this.props.item.channelName} · {this.props.item.time}</Text>
            </View>
        </View>
        <Image style={{height:240, width:'90%',alignSelf:'center',paddingHorizontal:10,borderRadius:10}} source={{uri: this.props.item.photo}} />
        <View style={{flexDirection:'row',marginVertical:5,paddingHorizontal:10}}>
            <Left style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:10}}>
                <AntDesign name="like1" size={30} color={Color.TintColor}/>
                <Text style={{color: Color.TintColor,marginLeft:3}}>{this.props.item.likes}</Text>

                <AntDesign name="dislike1" size={30} color={Color.TintColor} style={{marginLeft:10,marginTop:5}}/>
                <Text style={{color: Color.TintColor}}>{this.props.item.dislikes}</Text>
            </Left>

            <Right style={{flexDirection:'row', justifyContent: 'flex-end',alignItems:'center',paddingRight:10}}>
                <MaterialIcons name="comment" size={30} color={Color.TintColor}/>
                <Text style={{color: Color.TintColor,marginLeft:3,marginRight:10}}>{this.props.item.dislikes}</Text>
                <Ionicons name="md-more" size={30} color={Color.TintColor} style={{alignSelf: 'flex-start'}}/>
            </Right>
           
        </View>
    </View>
    );
  }
}

export default PostTextImg;
