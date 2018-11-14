import React, { Component } from 'react';
import Color from './Color';
import { TouchableOpacity, Text,Image ,View} from 'react-native';
import { List,ListItem} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
class Stories extends Component {
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

  render() {
    return (
        <View style={this.props.style}>
            {
                (typeof this.props.title !== 'undefined') ? 
                <Text style={{color:'white',marginLeft:10}}>{this.props.title}</Text>:null
            }

            <View style={[{flexDirection:'row'}]}>
                 
                 <List horizontal style={{flex:0.8}}
                 showsHorizontalScrollIndicator={false}
                 dataArray={this.props.data}
                 renderRow={(item)=>
                   <ListItem noBorder noIndent style={{width: (item.seen)? 70:80,marginTop: (item.seen)? 5:0,flexDirection:'column'}}>
                       <TouchableOpacity style={{height:this.height(item.seen),width:this.width(item.seen),borderRadius:this.radius(item.seen), borderColor:'red',margin:5,borderWidth:item.seen ? 0:2,padding:item.seen ? 0:10,justifyContent:'center',alignItems:'center'}} >
                       <Image style={{height:50,width:50,borderRadius:25, borderColor:'transparent'}} 
                           source={{uri:item.img}}/>
                       </TouchableOpacity>
                       <Text style={{width:70,textAlign:'center',color:'white'}}>{item.channelName}</Text>
                   </ListItem>
                 }
                 />
             { /*    <View style={{borderLeftWidth: 1, borderLeftColor: Color.BackgroundDark,margin:5}}/> */ }

                 <TouchableOpacity style={{alignSelf:'center',marginLeft:5,flex:0.2}}>
                   <Text style={{color:'#32578c',fontWeight:'bold',fontSize:16}}>TÜMÜ</Text>
                 </TouchableOpacity>
            </View>
        </View>
        
    );
  }
}

export default Stories;
