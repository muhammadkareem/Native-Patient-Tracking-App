import React, { Component } from 'react';
import {
  Container, Header, Title, Content, View,
  Drawer, DeckSwiper, Card, CardItem, Thumbnail, Footer,
  FooterTab, Button, Form, Item, Input, Left, H3, List, ListItem, Label,
  Right, Body, Icon, Text, Spinner, Switch, Tabs, Tab, TabHeading
} from 'native-base';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';



export default class DrawerComp extends Component {
  constructor(props) {
    super(props)
  }

  LogoutPress(){
    firebase.auth().signOut().then(()=> {
      Actions.login()
    }).catch((error)=>{
      console.log(error.message)
    });
  }

  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };


    
    return (

      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={




          <View style={{ backgroundColor: '#f1f8e9', flex: 1 }} >
            <Image source={require("../img/2016-09-29-healthcare-kiosk.png")}
              style={{ width: 300, height: 200 }} />

            <View style={{ marginTop: 10 }}>
              <List>
                <ListItem>
                  <Thumbnail small source={require('../img/doctor-avatar_1321115.jpg')} style={{ marginTop: 6, marginRight: 5 }} />
                  <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>Dr.{"Muhammad karim"}</Text>
                </ListItem>
                <ListItem icon onPress={() => Actions.dashboard()}>
                  <Left>
                    <Icon name="home" style={{ color: '#80cbc4' }} />
                  </Left>
                  <Body>
                    <Text>Home</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>

                <ListItem icon onPress={() => Actions.searchlist()} >
                  <Left>
                    <Icon name="bookmarks" style={{ color: '#dce775' }} />
                  </Left>
                  <Body>
                    <Text>List</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.patientform()}>
                  <Left>
                    <Icon name="paper" style={{ color: 'lightblue' }} />
                  </Left>
                  <Body>
                    <Text>Form</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon onPress={this.LogoutPress.bind(this)} >
                  <Left>
                    <Icon name="person" style={{ color: '#e57373' }} />
                  </Left>
                  <Body>
                    <Text>Logout</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </View>
          </View>
        }
        onClose={() => this.closeDrawer} >



        <Container>


          <Header style={style.Header}>
            <Left>
              <Button transparent onPress={() => openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>

              <Title style={{ fontSize: 24, fontFamily: 'cursive' }}>
                PT
            <Icon name='pulse' style={{ color: '#4caf50' }} />
                <Text style={{ flex: 1, fontSize: 14, color: '#ffffff', fontFamily: 'cursive' }}>App</Text>
              </Title>

            </Body>
            <Right>

              <Text style={{ fontSize: 16, color: '#ffffff', fontFamily: 'cursive' }}>{this.props.path}</Text>

            </Right>
          </Header>

          <Content>
            {this.props.children}
          </Content>
          <View>
            <Button full style={{ backgroundColor: '#00bfa5' }} onPress={this.props.action} >
              <Text>{this.props.actionname}</Text>
            </Button>
          </View>
        </Container>
      </Drawer>
    );
  }
}

var style = StyleSheet.create({
  Header: {
    backgroundColor: '#00bfa5'
  }
})
