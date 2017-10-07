import React, { Component } from 'react';
import DrawerCom from '../component/drawer';
import {
    Container, Header, Title, Content, View,
    Drawer, DeckSwiper, Card, CardItem, Thumbnail, Footer,
    FooterTab, Button, Form, Item, Input, Left, H3, List, ListItem, Picker,
    Right, Body, Icon, Text, Spinner, Switch, Label
} from 'native-base';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import CardView from '../component/cardview';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';




export default class PatientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formName: '',
            formNumber: '',
            gender: '',
            disease: '',
            date: ''

        }
    }


    FormSubmit() {
        const time = new Date().toLocaleTimeString();
        const { formName, formNumber, gender, disease, date } = this.state;
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/Patient Data`).push({ formName, formNumber, gender, disease, date, time })

        Actions.searchlist()


    }


    render() {
        return (
            <DrawerCom path={"Patient Form"} action={() => Actions.dashboard()} actionname={"Back"} >

                <Image source={require("../img/hero8.jpg")}>
                    <Content style={{ marginTop: 20, margin: 3, opacity: 0.75, width: 353 }}>
                        <Card>

                            <CardView>
                                <CardItem>
                                    <Item floatingLabel>
                                        <Label style={styles.PickerTextStyle}>Full Name</Label>
                                        <Input
                                            value={this.state.formName}
                                            onChangeText={value => this.setState({ formName: value })}
                                            style={{ color: '#000', }}
                                        />
                                    </Item>
                                </CardItem>
                            </CardView>
                            <CardView>
                                <CardItem>
                                    <Item floatingLabel>
                                        <Label style={styles.PickerTextStyle}>Cell Number</Label>
                                        <Input
                                            value={this.state.formNumber}
                                            onChangeText={value => this.setState({ formNumber: value })}
                                            style={{ color: '#000', }}
                                        />
                                    </Item>
                                </CardItem>
                            </CardView>

                            <CardView>
                                <Text style={styles.PickerTextStyle}>Gender</Text>
                                <Picker
                                    mode="dropdown"
                                    style={{ flex: 1, marginLeft: 75 }}
                                    selectedValue={this.state.gender}
                                    onValueChange={value => this.setState({ gender: value })}
                                >
                                    <Picker.Item label=" selected" />
                                    <Picker.Item label=" Male" value="Male" />
                                    <Picker.Item label=" Female" value="Female" />
                                </Picker>
                            </CardView>

                            <CardView>
                                <Text style={styles.PickerTextStyle}> Disease </Text>
                                <Picker
                                    mode="dropdown"
                                    style={{ flex: 1, marginLeft: 75 }}
                                    selectedValue={this.state.disease}
                                    onValueChange={value => this.setState({ disease: value })}
                                >
                                    <Picker.Item label=" selected" />
                                    <Picker.Item label="  Cancer" value="Cencer" />
                                    <Picker.Item label="  Fever" value="Fever" />
                                    <Picker.Item label="  Alser" value="Alser" />
                                    <Picker.Item label="  Pragrentcy" value="Pragrentcy" />
                                    <Picker.Item label="  Tuberclosis" value="Tuberclosis" />
                                    <Picker.Item label="  Blood presure" value="Blood presure" />
                                    <Picker.Item label="  Other" value="Other" />
                                </Picker>
                            </CardView>
                            <CardView>
                                <Text style={styles.PickerTextStyle}>Full Date</Text>
                                <DatePicker
                                    style={{ width: 200, marginLeft: 40 }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2017-05-01"
                                    maxDate="3000-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                    }}
                                    onDateChange={(value) => { this.setState({ date: value }) }}
                                />

                            </CardView>

                            <CardItem>
                                <Button block success style={{
                                    marginLeft: 80,
                                    width: 180
                                }} onPress={this.FormSubmit.bind(this)} >
                                    <Text> Submint</Text>
                                </Button>
                            </CardItem>

                        </Card>
                    </Content>
                </Image>
            </DrawerCom >
        )
    }
}
const styles = {
    inputform: {
        borderBottomWidth: 2,
        borderBottomColor: '#9ccc65',
        borderRadius: 5
    },
    containerStyle: {

        marginTop: -65,

    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    homebuttonStyle: {
        width: 40,
    },
    cardStyle: {
        width: 300,
        height: 150,
        backgroundColor: '#4BB543',

    },
    imageStyle: {
        flex: 1, width: 400, height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 300,
    },
    PickerTextStyle: {
        color: 'green'

    }
}