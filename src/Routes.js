import React from 'react';
import { View, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './auth/login';
import Dashboard from './container/dashboard'
import PatientForm from './container/patientform';
import SignUp from './auth/signup';
import SearchList from './component/searchlist';
import ListItems from './component/listitems';



const RouterCom = () => {


    return (
        <Router >
            <Scene key='main'>


                <Scene key="login" component={Login} hideNavBar={true} />

                <Scene key='signup' component={SignUp} hideNavBar={true} />

                <Scene key="dashboard" component={Dashboard} hideNavBar={true} initial />

                <Scene key="searchlist" component={SearchList} hideNavBar={true} />

                <Scene key="patientform" component={PatientForm} hideNavBar={true} />

                <Scene key="listitems" component={ListItems} hideNavBar={true} />
            </Scene>
        </Router>
    );
};

export default RouterCom;