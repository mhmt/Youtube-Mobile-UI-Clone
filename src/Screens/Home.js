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
import Topics from '../Components/Topics'
import Images from '../Components/Image';
import Data from '../Components/Data';
import LastWatched from '../Components/LastWatched'

export default class Home extends Component {
  state={
    isFontLoaded:false,
    profile: "https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
    posts:Data.posts
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
              <PostVideo  item={item.data} style={{borderBottomColor: Color.BackgroundDark,borderBottomWidth: 1}} />
            )

            if(item.type == 3)
            return(
              <Stories data={Data.stories} style={{borderColor: Color.BackgroundDark,borderBottomWidth: 1}} title="Tüm Hikayeler"/>
            )

            if(item.type == 4)
            return(
              <Topics data={item.data} style={{borderColor: Color.BackgroundDark,borderBottomWidth: 1}} title="Size Özel Konular"/>
            )
          }}
          />
        </Content>
      </Container>
    )
  }
}
