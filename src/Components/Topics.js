import React, { Component } from 'react';
import Color from './Color';
import { TouchableOpacity, Text,Image ,View} from 'react-native';
import { List,ListItem} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

class Topics extends Component {
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
        <View>
            {
                (typeof this.props.title !== 'undefined') ? 
                <Text style={{color:'white',marginLeft:10}}>{this.props.title}</Text>:null
            }

            <View style={[{flexDirection:'row'},(this.props.style)]}>
                 
                 <List horizontal style={{flex:1}}
                 showsHorizontalScrollIndicator={false}
                 dataArray={this.props.data}
                 renderRow={(item)=>{
                    return(
                    <ListItem noBorder noIndent style={{width: 90}}>
                      <TouchableOpacity style={{height:120,width:80,borderRadius:20,margin:5,padding:10,justifyContent:'center',alignItems:'center'}} >
                        <View style={{ height:120,width:80,backgroundColor:this.getRandomColor(),borderRadius:10}}>
                          <Image style={{height:60,width:80,borderRadius:5}} source={item.image}/>
                          <Text style={{color:'white',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:20}}>{item.text}</Text>
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

export default Topics;
