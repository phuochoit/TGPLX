import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
class SigninComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems:'center' }}>
                <TouchableOpacity onPress={() => this.props.fetchSigninContainer('Facebook')}>
                    <Text>Đăng Nhập Bằng Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.fetchSigninContainer('Google')}>
                    <Text>Đăng Nhập Bằng Google</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SigninComponent;