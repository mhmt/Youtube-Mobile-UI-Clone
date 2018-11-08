import React, { Component } from 'react'
import { Text, View,Image,ImageBackground} from 'react-native'
import { Container,Content,List, ListItem } from 'native-base';
import Color from '../Components/Color';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeaderComponent from '../Components/Header'
import Stories from '../Components/Stories';

export default class Subscriptions extends Component {
  state={
    isFontLoaded:false,
    journos:"https://yt3.ggpht.com/a-/AN66SAwD-i4CZ9NmTYi2q8lczoPu4OLKHLUOv6hvUg=s288-mo-c-c0xffffffff-rj-k-no",
    videos:[
      {
        id:"Sprjka3noIE",
        thumbnail:"https://i.ytimg.com/vi/Sprjka3noIE/maxresdefault.jpg",
        channelImg:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
        title:"Cobra CX112 Walkie-Talkie Telsiz İncelemesi",
        channelName: "TeknoSeyir",
        views:"5 B görüntüleme",
        seen:true,
        ago: '17 saat önce',
        duration:"13:48"
      },
      {
        id:"DhbMnQt14_o",
        thumbnail:"https://i.ytimg.com/vi/DhbMnQt14_o/maxresdefault.jpg",
        channelImg:"https://yt3.ggpht.com/a-/AN66SAxrJ4HDUDpnoBz7NHbPOlA0DMh8B0kF7r1Y8Q=s288-mo-c-c0xffffffff-rj-k-no",
        title:"DIY Studio Lights - How to Build Your Own!",
        channelName: "DIY Perks",
        views:"261 B görüntüleme",
        seen:false,
        ago: '1 ay önce',
        duration:"14:25"
      },
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
    ],
    stories:[
      {
        img:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
        seen: false
      },
      {
        img:"https://yt3.ggpht.com/a-/AN66SAxrJ4HDUDpnoBz7NHbPOlA0DMh8B0kF7r1Y8Q=s288-mo-c-c0xffffffff-rj-k-no",
        seen: false
      },
      {
        img:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
        seen: true
      },
      {
        img:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
        seen: true
      },
      {
        img:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
        seen: true
      },
      {
        img:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
        seen: true
      }
    ]
  }
 

  render() {
    return (
      <Container style={{backgroundColor:Color.Background}}>
          <HeaderComponent img={this.state.videos[0].channelImg}/>
          <Content>
              <Stories data={this.state.stories} />
              <View  style={{borderBottomWidth: 1,borderBottomColor: Color.BackgroundDark, flex:1}}/>
              <List dataArray={this.state.videos}
              renderRow={(item)=>
            
              <ListItem style={{borderColor:Color.BackgroundDark,flexDirection:'column'}}
                onPress={()=>{
                  console.log("ITEM CLICK")
                }}>

                  <ImageBackground source={{uri:item.thumbnail}} style={{height:260,width:100+'%', justifyContent:'flex-end',alignItems:'flex-end'}}>
                      <Text style={{backgroundColor:Color.BackgroundDark,opacity:0.9, color:'white',margin:10,paddingHorizontal:5,paddingVertical:2}}>{item.duration}</Text>
                  </ImageBackground>
                  <View style={{flexDirection:'row',marginTop:5,width:'100%'}}>
                    <Image style={{height:50,width:30,borderRadius:25,flex:0.15}} source={{uri:item.channelImg}}/>
                    <View style={{justifyContent:'flex-start',alignItems:'flex-start',marginLeft:10,flex:0.8}}>
                      <Text style={{fontWeight:'bold',color:'#a9a9a9'}}>{item.title}</Text>
                      <Text style={{color:'#525252'}}>{item.channelName} · {item.views}</Text>
                      <Text style={{color:'#525252'}}>{item.ago}</Text>
                    </View>
                    <Ionicons name="md-more" size={30} color='#525252' style={{alignSelf: 'flex-start',flex:0.05}}/>
                  </View>
              </ListItem>
            
              }>
                
              </List>
          </Content>
      </Container>
    )
  }
}