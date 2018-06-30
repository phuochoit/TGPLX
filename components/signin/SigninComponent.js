import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import { APP } from "../../values/ScreenName";

class SigninComponent extends Component {
    constructor(props) {
        super(props);
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
        
    }
    loginWithFacebook = () => {
        this.props.fetchSigninContainer('Facebook');
    }
    loginWithGoogle = () => {
        this.props.fetchSigninContainer('Google');
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems:'center' }}>
                <TouchableOpacity onPress={this.loginWithFacebook} disabled={this.props.user.currentlySending}>
                    <Text>Đăng Nhập Bằng Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.loginWithGoogle} disabled={this.props.user.currentlySending}>
                    <Text>Đăng Nhập Bằng Google</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SigninComponent;