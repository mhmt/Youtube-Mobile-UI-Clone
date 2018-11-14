import React, { Component } from 'react';
import Color from './Color';
import { TouchableOpacity, Text,ImageBackground ,View} from 'react-native';
import { List,ListItem} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

class LastWatched extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  height(seen){
    return seen ? 50:60;
  }

  width(seen){
    return seen ? 50:60;
  }

  radius(seen){
    return seen ? 25:30;
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
        <View style={this.props.style}>
            {
                (typeof this.props.title !== 'undefined') ? 
                <Text style={{color:'white',marginLeft:10}}>{this.props.title}</Text>:null
            }

            <View style={[{flexDirection:'row'}]}>
                 
                 <List horizontal style={{flex:1}}
                 showsHorizontalScrollIndicator={false}
                 dataArray={this.props.data}
                 renderRow={(item)=>{
                    return(
                    <ListItem noBorder noIndent style={{width: 160}}>
                      <TouchableOpacity style={{height:160,width:160,justifyContent:'flex-start',alignItems:'center'}} >
                        <View style={{borderBottomColor:'red',borderBottomWidth:2}}>
                          <ImageBackground source={{uri:item.thumbnail}} style={{height:100,width:140, justifyContent:'flex-end',alignItems:'flex-end'}}>
                              <Text style={{ backgroundColor:'black',opacity:0.8, color:'white',margin:5,paddingHorizontal:5,paddingVertical:2,fontSize:10}}>{item.length}</Text>
                          </ImageBackground>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <View style={{marginTop:3, width:110}}>
                              <Text style={{color:'white'}}>{item.title.slice(0,32)}..</Text>
                              <Text style={{color: Color.TintColor,marginTop:3}}>{item.channelName}</Text>
                          </View>
                          <Ionicons name="md-more" size={15} color={Color.TintColor} style={{alignSelf: 'flex-start',marginTop:5,marginRight:5}}/>
                        </View>
                      </TouchableOpacity>
                    </ListItem>
                    )
                 }
                   
                 }
                 />
             { /*    <View style={{borderLeftWidth: 1, borderLeftColor: Color.BackgroundDark,margin:5}}/> */ }

            </View>
        </View>
        
    );
  }
}

export default LastWatched;
