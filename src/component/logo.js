import React , {Component} from 'react';
import { Container, Header, Title, Content,  View,
    Drawer, DeckSwiper, Card, CardItem, Thumbnail, Footer, 
   FooterTab,  Button, Form, Item, Input, Left, H3,List,ListItem,
    Right, Body, Icon, Text, Spinner,Switch } from 'native-base';
  import {StyleSheet,Image,TouchableHighlight} from 'react-native';


  export default class Logo extends Component{
constructor(props){
    super(props)
}

ComponentWillMount(){
    
     var config = {
         apiKey: "AIzaSyAangyRcpcryoBA2OfIOKZfvVcGFCBA-Eo",
         authDomain: "patienttrackapp.firebaseapp.com",
         databaseURL: "https://patienttrackapp.firebaseio.com",
         projectId: "patienttrackapp",
         storageBucket: "patienttrackapp.appspot.com",
         messagingSenderId: "675553114684"
       };
       firebase.initializeApp(config);
 }
 

render(){
    return(
       
            <View style={{alignSelf:'center',marginTop:20,marginLeft:-240}}>
            <Title style={{fontSize:30,fontFamily:'cursive'}}>
            PT
            <Icon name='pulse' style={{color:'#4caf50'}}/>
            <Text style={{flex:1,fontSize:14,color:'#ffffff',fontFamily:'cursive'}}>App</Text>
            </Title>
            <Text style={{fontSize:14,color:'#ffffff',fontFamily:'cursive'}}>Patient Track App</Text>
            </View>
      
    )
}
  }