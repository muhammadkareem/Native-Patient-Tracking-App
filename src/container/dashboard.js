import React, { Component } from 'react';
import DrawerCom from '../component/drawer';
import {
  Container, Header, Title, Content, View,
  Drawer, DeckSwiper, Card, CardItem, Thumbnail, Footer,
  FooterTab, Button, Form, Item, Input, Left, H3, List, ListItem,
  Right, Body, Icon, Text, Spinner, Switch
} from 'native-base';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';



export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }


LogoutPress(){
  firebase.auth().signOut().then(()=> {
    console.log("Sign out")
    Actions.login()
  }).catch((error)=>{
    console.log(error.message)
  });
}

  render() {
    return (
      <DrawerCom path={"Home"} action={this.LogoutPress.bind(this)} actionname={"Logout"}>
        <View>

          <Image source={require("../img/2.jpg")}
            style={{ height: 250,width:400, opacity: 0.85 }}>


          </Image>
          <List>
      <ListItem icon >
        <Left>
          <Icon name="person" style={{color:'#80cbc4'}}/>
        </Left>
        <Body>
          <Text>Patient Name</Text>
        </Body>
      </ListItem>
      
      <ListItem icon >
        <Left>
          <Icon name="keypad" style={{color:'#dce775'}}/> 
        </Left>
        <Body>
          <Text>Cell No</Text>
        </Body>
       
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="eye" style={{color:'lightblue'}}/>
        </Left>
        <Body>
          <Text>Gender</Text>
        </Body>
       
      </ListItem>
    <ListItem icon >
    <Left>
          <Icon name="bicycle" style={{color:'#e57373'}}/> 
        </Left>
        <Body>
          <Text>Shift</Text>
        </Body>
        
    </ListItem>
    <ListItem icon >
    <Left>
          <Icon name="alarm" style={{color:'#e57373'}}/> 
        </Left>
        <Body>
          <Text>Date & Time</Text>
        </Body>
        
    </ListItem>
    </List>
        </View>
      </DrawerCom>


    )
  }
}