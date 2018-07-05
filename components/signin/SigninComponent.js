import React, { Component } from 'react';
import { Container, Thumbnail, Button, Icon, Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as firebase from 'firebase';

import { FACEBOOKID, GOOGLEID } from "../../values/Strings";
import { styles } from "../../assets/styles/styles";
class SigninComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false
        }

        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
    }

    loginWithFacebook = async () => {
        this.setState({ disable: !this.state.disable });
        try {
            const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOKID, {
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                user = await firebase.auth().signInWithCredential(credential);
                this.props.fetchSigninContainer(user);
                this.setState({ disable: !this.state.disable });
            }else{
                this.setState({ disable: !this.state.disable });
            }

        } catch (error) {
            console.log('error', e);
            this.setState({ disable: !this.state.disable });
        }

    }

    loginWithGoogle = async () => {
        this.setState({ disable: !this.state.disable });
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: GOOGLEID,
                // iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                token = result.accessToken;
                let credential = firebase.auth.GoogleAuthProvider.credential(null, token);
                user = await firebase.auth().signInWithCredential(credential);
                this.props.fetchSigninContainer(user);
                this.setState({ disable: !this.state.disable });
            } else {
                this.setState({ disable: !this.state.disable });
            }
        } catch (e) {
            console.log('error', e);
            this.setState({ disable: !this.state.disable });
        }
    }

    render() {
        const { disable } = this.state;
        return (
            <Container style={[styles.containerbg, styles.pda]}>
                <Grid>
                    <Row style={[styles.jcac, styles.fx3]}>
                        <Thumbnail square source={require('../../assets/icon.png')} />
                    </Row>
                    <Row style={styles.fx1}>
                        <Grid>
                            <Row>
                                <Button
                                    full
                                    iconLeft
                                    rounded
                                    disabled={disable}
                                    style={[styles.fx1, styles.pda, { backgroundColor: '#4267B2' }]}
                                    onPress={this.loginWithFacebook}
                                >
                                    <Icon name='facebook' type='FontAwesome' style={[styles.fx1, styles.fontSizedefault, { paddingLeft: 5 }]} />
                                    <Text style={[styles.fx5, styles.textcolorfff]}>Đăng Nhập Bằng Facebook</Text>
                                </Button>
                            </Row>
                            <Row>
                                <Button
                                    full
                                    iconLeft
                                    rounded
                                    style={[styles.fx1, styles.pda, { flex: 1, backgroundColor: '#D50F26' }]}
                                    onPress={this.loginWithGoogle}
                                    disabled={disable}
                                >
                                    <Icon name='google' type='FontAwesome' style={[styles.fx1, styles.fontSizedefault, { paddingLeft: 5 }]} />
                                    <Text style={[styles.fx5, styles.textcolorfff]}>Đăng Nhập Bằng Google</Text>
                                </Button>
                            </Row>
                        </Grid>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

export default SigninComponent;