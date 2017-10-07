import React, { Component } from 'react';
import {
    Container, Content, Item, Input, Button,
    Text, View, Form, CardItem, Spinner, Label, Title, Icon, Body
} from 'native-base';
import { Image } from 'react-native';
import Logo from '../component/logo';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }


    onButtonPress() {
        const { email, password, error, loading } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).then(
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log(user)
                    this.setState({ loading: true })
                     Actions.dashboard()
                } else {
                    console.log("user Not Fount")
                }

            }))
            .catch(
            (e) => {
                this.setState({ error: e.message })
            })



    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button block success style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
                <Text> Sign in </Text>
            </Button>
        );
    }


    render() {
        return (
            <Image source={require('../img/blurred-background-design_1107-219.jpg')} style={{ width: 600, height: 720 }}>
                <Container>


                    <Logo />


                    <Content style={styles.containerStyle}>
                        <Form>
                            <CardItem>

                                <Text style={{ fontFamily: 'cursive', fontSize: 24, marginLeft: 100, color: '#795548' }}>Sign In</Text>

                            </CardItem>
                            <CardItem>
                                <Item floatingLabel>
                                    <Label>Email</Label>
                                    <Input
                                        onChangeText={(value) => this.setState({ email: value })}
                                        value={this.state.email} />
                                </Item>
                            </CardItem>

                            <CardItem>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input
                                        secureTextEntry
                                        onChangeText={(value) => this.setState({ password: value })}
                                        value={this.state.password}
                                    />
                                </Item>

                            </CardItem>
                            <CardItem>

                                {this.renderButton()}
                                <Text style={styles.errorTextStyle} >
                                    {this.state.error}
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Button transparent warning onPress={() => Actions.signup()} style={styles.buttonStyle}>
                                    <Text> Create account </Text>
                                </Button>

                            </CardItem>
                        </Form>
                    </Content>
                </Container>
            </Image>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red',
        marginTop: 50,
        marginLeft: -270
    },
    containerStyle: {

        marginTop: 40,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
        width: 350,
        opacity: 0.7,
        borderRadius: 20
    },
    buttonStyle: {
        marginLeft: 80,
        width: 180
    },
    textStyle: {
        marginTop: -10,
        color: 'green',
        marginLeft: 120,
    },
    textStyle2: {
        marginTop: -15,

    },
    spinnerStyle: {
        marginLeft: 150
    }
}