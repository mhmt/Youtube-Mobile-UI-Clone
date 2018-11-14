import React, { Component } from 'react'
import { Text, View,Image,ImageBackground} from 'react-native'
import { Container,Content,List, ListItem } from 'native-base';
import Color from '../Components/Color';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeaderComponent from '../Components/Header'
import Stories from '../Components/Stories';
import Data from '../Components/Data';
import PostVideo from "..//Components/PostVideo"
export default class Subscriptions extends Component {
  state={
    isFontLoaded:false,
    journos:"https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
    videos:Data.mVideos,
    stories:Data.stories
  }

  componentWillMount(){
   // this.setState({videos:Data.videos, stories:Data.stories})
  // console.log(this.state.stories)
  }
 

  render() {
    return (
      <Container style={{backgroundColor:Color.Background}}>
          <HeaderComponent img={this.state.journos}  navigation={this.props.navigation}/>
          <Content>
              <Stories data={this.state.stories} />
              <View  style={{borderBottomWidth: 1,borderBottomColor: Color.BackgroundDark, flex:1}}/>
              <List dataArray={this.state.videos}
              renderRow={(item)=>
            
              <ListItem style={{borderColor:Color.BackgroundDark}}
                onPress={()=>{
                  console.log("ITEM CLICK")
                }}>

                <PostVideo item={item}/>
                
              </ListItem>
            
              }>
                
              </List>
          </Content>
      </Container>
    )
  }
}