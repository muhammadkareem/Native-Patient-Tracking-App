import React, { Component } from 'react';
import {
    Container, Content, Item, Input, Button,
    Text, View, Form, CardItem, Spinner,
    Label, Title, Icon, Body, ListItem, CheckBox
} from 'native-base';
import { Image } from 'react-native';
import Logo from '../component/logo';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';


export default class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            loading: false,
            error: ''
        }

    }


    onButtonPress() {
        const { email, password, error, loading,username } = this.state;
        console.log(this.state);
         firebase.auth().createUserWithEmailAndPassword(username,email,password)
        .then((user)=>{
            this.setState({loading:true})
            console.log(user)
           Actions.login();
        })
        
           .catch((e) => this.setState({error:e.message}))
        
            
    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button block success style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
                <Text> SignUp </Text>
            </Button>

        );
    }
    render() {
        return (
            <Image source={require('../img/blurred-background-design_1107-219.jpg')} style={{ width: 600, height: 720 }}>
                <Container >
                    <Logo />
                    <Content style={styles.containerStyle}>
                        <Form >
                            <CardItem>
                                <Item floatingLabel>
                                    <Label>User Name</Label>
                                    <Input
                                        onChangeText={(value) => this.setState({ username: value })}
                                        value= {this.state.username}
                                        required/>
                                </Item>
                            </CardItem>

                            <CardItem>
                                <Item floatingLabel>
                                    <Label>Email</Label>
                                    <Input

                                        onChangeText={(value) => this.setState({ email: value })}
                                        value={this.state.email}
                                        required
                                    />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input
                                        secureTextEntry
                                        onChangeText={(value) => this.setState({ password: value })}
                                        value={this.state.password}
                                        required
                                    />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <CheckBox checked={true} />
                                <Text style={{ marginLeft: 15 }}>Filled Form</Text>

                            </CardItem>
                            <CardItem>
                                <CheckBox checked={true} />
                                <Text style={{ marginLeft: 15 }}>Accept Terms</Text>
                            </CardItem>

                            <CardItem>
                                {this.renderButton()}

                                <Text style={styles.errorTextStyle} >
                                    {this.state.error}
                                </Text>
                            </CardItem>

                        </Form>
                        <Button warning full style={{ marginTop: 15 }} onPress={() => Actions.login()}><Text>Back</Text></Button>
                    </Content>

                </Container>
            </Image>
        );
    };
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
        opacity: 0.7
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
};