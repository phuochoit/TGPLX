import React, { Component } from 'react';
import {  Container} from "native-base";
import { Text, View, TouchableOpacity} from 'react-native';

import HeaderComponent from "../config/HeaderComponent";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.logoutWithFirebase = this.logoutWithFirebase.bind(this);
    }
    logoutWithFirebase = () => {
        this.props.fetchLogoutContainer();
    }
    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation} title="Ôn thi giấy phép lái xe" />
                <TouchableOpacity onPress={this.logoutWithFirebase} >
                     <Text>Đăng Xuất</Text>
                 </TouchableOpacity>
            </Container>

            // <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            //     <TouchableOpacity onPress={this.logoutWithFirebase} >
            //         <Text>Đăng Xuất</Text>
            //     </TouchableOpacity>

            //     <Text>HomeComponent</Text>
            // </View>
        );
    }
}

export default HomeComponent;