import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

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
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.logoutWithFirebase} >
                    <Text>Đăng Xuất</Text>
                </TouchableOpacity>

                <Text>HomeComponent</Text>
            </View>
        );
    }
}

export default HomeComponent;