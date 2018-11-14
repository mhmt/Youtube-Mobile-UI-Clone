import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { Container, Header, Left, Right, Content, List, ListItem } from 'native-base';
import Color from '../Components/Color';
import { Font } from 'expo';
import HeaderComponent from '../Components/Header'
import Data from '../Components/Data';
import LastWatched from '../Components/LastWatched'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import Playlist from '../Components/Playlist'
export class Library extends Component {
    state={
        isFontLoaded:false,
        playlists_picker:"Oynatma Listeleri (Yakında Video Eklenenler)",
        profile: "https://yt3.ggpht.com/a-/AN66SAwpcoAvLiVkBxmdWFGFFAEBVi47tuDesum_lg=s288-mo-c-c0xffffffff-rj-k-no",
        picker_items:[
            {
                label:"Oynatma Listeleri (Yeni Video Eklenenler)",
                value:0
            },
            {
                label:"Oynatma Listeleri (A'dan Z'ye)",
                value:1
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
                    <LastWatched data={Data.mVideos} title="Son İzlenenler" style={{marginTop:10}}/>

                    <View style={{borderColor:Color.BackgroundDark,borderBottomWidth:1,borderTopWidth:1,padding:15,marginTop:10}}> 
                        <TouchableOpacity>
                            <View style={{flexDirection:'row',alignItems:'center',margin:10}}>     
                                <MaterialIcons name="history" size={20} color={Color.TintColor} />
                                <Text style={{color:'white',marginLeft:10}}> Geçmiş</Text>
                            </View>  
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{flexDirection:'row',alignItems:'center',margin:10}}>     
                                <Entypo name="folder-video" size={20} color={Color.TintColor} />
                                <Text style={{color:'white',marginLeft:10}}> Videolarım</Text>
                            </View>  
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{flexDirection:'row',alignItems:'center',margin:10}}>     
                                <MaterialIcons name="watch-later" size={20} color={Color.TintColor} />
                                <Text style={{color:'white',marginLeft:10}}> Daha sonra izle</Text>
                            </View>  
                        </TouchableOpacity>
                    </View>

                    <View style={{padding:15}}>
                        
                        <Playlist data={Data.playlists[0]}/> 
                        <Playlist data={Data.playlists[1]}/> 
                        <Playlist data={Data.playlists[2]}/> 
                        <Playlist data={Data.playlists[3]}/> 
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Library