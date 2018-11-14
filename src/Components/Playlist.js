import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import Color from '../Components/Color'
export class Platlist extends Component {
  render() {
    return (
      <View style={{marginVertical:12}}>
        <TouchableOpacity style={{flexDirection:'row'}}>
            <Image style={{height:35,width:35}} source={this.props.data.thumbnail} />
            <View style={{marginLeft:15}}>
                <Text style={{color:Color.BorderColor}}>{this.props.data.title}</Text>
                <Text style={{color:Color.TintColor}}>{this.props.data.channel !== "" ? this.props.data.channel +" · ":null}{this.props.data.videos} video</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Platlist