import React, { Component } from 'react';
import { Container, Thumbnail, Button, Icon, Text} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import { styles } from "../../assets/styles/styles";
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
            <Container style={[styles.containerbg, styles.pda]}>
                <Grid>
                    <Row style={[styles.jcac, styles.fx3]}>
                        <Thumbnail square source={require('../../assets/icon.png')} />
                    </Row>
                    <Row style={styles.fx1}>
                        <Grid>
                            <Row>
                                <Button full iconLeft rounded style={[styles.fx1, styles.pda, { backgroundColor: '#4267B2' }]} onPress={this.loginWithFacebook}>
                                    <Icon name='facebook' type='FontAwesome' style={[styles.fx1, styles.fontSizedefault, { paddingLeft: 5 }]} />
                                    <Text style={[styles.fx5, styles.textcolorfff, styles.fontSizedefault]}>Đăng Nhập Bằng Facebook</Text>
                                </Button>
                            </Row>
                            <Row>
                                <Button full iconLeft rounded style={[styles.fx1, styles.pda, { flex: 1, backgroundColor: '#D50F26' }]} onPress={this.loginWithGoogle}>
                                    <Icon name='google' type='FontAwesome' style={[styles.fx1, styles.fontSizedefault, { paddingLeft: 5 }]} />
                                    <Text style={[styles.fx5, styles.textcolorfff, styles.fontSizedefault]}>Đăng Nhập Bằng Google</Text>
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