import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Container, Header, Left, Right, Content, List, ListItem } from 'native-base';
import Color from '../Components/Color';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Font } from 'expo';
import HeaderComponent from '../Components/Header'
import PostTextImg from '../Components/PostTextImg';
import PostText from '../Components/PostText'
import PostVideo from '../Components/PostVideo'
import Stories from '../Components/Stories';
export default class Home extends Component {
  state={
    isFontLoaded:false,
    profile: "https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
    posts:[
      {
          type:0, // Sadece Yazı Post
          data:{
              profileImg:"https://yt3.ggpht.com/-hd_XjkPVH5U/AAAAAAAAAAI/AAAAAAAAAAA/1Vhlf_0Ner0/s76-c-k-no-mo-rj-c0xffffff",
              text: "Edemedim. :) Çok uzun video oldu. Yardırıyorum, yardırıyorum.﻿",
              channelName:"Karınca Çiftliğim",
              time:"14 saat önce",
              likes:87,
              dislikes:3,
              comments:12
          }
      },
      {
          type:3,
          data:[
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
              img:"https://yt3.ggpht.com/-hd_XjkPVH5U/AAAAAAAAAAI/AAAAAAAAAAA/1Vhlf_0Ner0/s76-c-k-no-mo-rj-c0xffffff",
              seen: true
            },
            {
              img:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
              seen: true
            },
            {
              img:"https://yt3.ggpht.com/a-/AN66SAwnOfQRfhrH-lqzYZqnUAsBb_cGOGWJ-4CzPQ=s288-mo-c-c0xffffffff-rj-k-no",
              seen: true
            }]
      },
      {
          type:1, // Fotoğraflı Yazı Post
          data:{
              profileImg:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
              text: "Açıklama : Timuçin Esen VS Müslüm Gürses VS Bülent Ersoy Ses Analizi videosu'nun kaldırılma sebebi Netd Müzik'in yayınlandıktan kısa süre sonra videoyu dünya genelinde engellemesi sebebi iledir. Yanlış anlamalar olduğu için açıklama gereği hissettim. Bu tarz açıklayıcı , öğretici videoların teliflenmesini bir türlü anlayamasamda yapacak birşey yok. Saygılarımla",
              photo: "https://i.ytimg.com/vi/Sprjka3noIE/maxresdefault.jpg",
              channelName:"TeknoSeyir",
              time:"5 saat önce",
              likes:480,
              dislikes:42,
              comments:30
          }
      },
      {
          type:2, // Video Post
          data:{
              id:"Sprjka3noIE",
              thumbnail:"https://i.ytimg.com/vi/Sprjka3noIE/maxresdefault.jpg",
              profileImg:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
              title:"Cobra CX112 Walkie-Talkie Telsiz İncelemesi",
              channelName: "TeknoSeyir",
              views:"5 B görüntüleme",
              seen:true,
              time: '17 saat önce',
              duration:"13:48"
          }
      },
      {
          type:1, // Fotoğraflı Yazı Post
          data:{
              profileImg:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
              text: "Açıklama : Timuçin Esen VS Müslüm Gürses VS Bülent Ersoy Ses Analizi videosu'nun kaldırılma sebebi Netd Müzik'in yayınlandıktan kısa süre sonra videoyu dünya genelinde engellemesi sebebi iledir. Yanlış anlamalar olduğu için açıklama gereği hissettim. Bu tarz açıklayıcı , öğretici videoların teliflenmesini bir türlü anlayamasamda yapacak birşey yok. Saygılarımla",
              photo: "https://i.ytimg.com/vi/Sprjka3noIE/maxresdefault.jpg",
              channelName:"TeknoSeyir",
              time:"5 saat önce",
              likes:480,
              dislikes:42,
              comments:30
          }
      },
      {
          type:2, // Video Post
          data:{
              id:"Sprjka3noIE",
              thumbnail:"https://i.ytimg.com/vi/Sprjka3noIE/maxresdefault.jpg",
              profileImg:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
              title:"Cobra CX112 Walkie-Talkie Telsiz İncelemesi",
              channelName: "TeknoSeyir",
              views:"5 B görüntüleme",
              seen:true,
              time: '17 saat önce',
              duration:"13:48"
          }
      }
    ]
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
        <HeaderComponent img={this.state.profile}/>
        <Content>
          <List dataArray={this.state.posts} 
          renderRow={(item)=>{
            if(item.type == 0)
            return (
              <PostText item={item.data}/>
            )
              
            if(item.type == 1)
            return(
              <PostTextImg item={item.data}/>
            )

            if(item.type == 2)
            return(
              <PostVideo  item={item.data} />
            )

            if(item.type == 3)
            return(
              <Stories data={item.data} style={{borderColor: Color.BackgroundDark,borderBottomWidth: 1}} title="Tüm Hikayeler"/>
            )
          }}
          />
        </Content>
      </Container>
    )
  }
}
