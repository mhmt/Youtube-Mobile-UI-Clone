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
          <HeaderComponent img={this.state.journos}/>
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
                { /* <ImageBackground source={{uri:item.thumbnail}} style={{height:260,width:100+'%', justifyContent:'flex-end',alignItems:'flex-end'}}>
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
              </View>*/}
              </ListItem>
            
              }>
                
              </List>
          </Content>
      </Container>
    )
  }
}