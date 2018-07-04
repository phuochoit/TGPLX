import React from "react";
import * as firebase from 'firebase';
import { View } from "react-native";
import { Container, Content, Text, List, ListItem, Thumbnail, H1, Left, Right, Body, Icon } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles, deviceHeight } from "../../assets/styles/styles";
import { HOME } from "../../values/ScreenName";

const routes = ["Home", "Chat", "Profile"];
const route = [{
    name: 'ONTAP',
    title: 'Ôn Tập',
    icon: 'book',
    iconType: 'FontAwesome'
}, {
    name: 'BIENBAO',
    title: 'Biển Báo',
    icon: 'warning',
    iconType: 'Entypo'
}, {
    name: 'BODE',
    title: 'Thi Theo Bộ Đề',
    icon: 'newspaper-o',
    iconType: 'FontAwesome'
}, {
    name: 'DENGAUNHIEN',
    title: 'Đề Ngẫu Nhiên',
    icon: 'random',
    iconType: 'FontAwesome'
}, {
    name: 'CAUSAI',
    title: 'Câu Sai',
    icon: 'check-square',
    iconType: 'Feather'
}, {
    name: 'MEOGHINHO',
    title: 'Mẹo Ghi Nhớ',
    icon: 'tooltip',
    iconType: 'MaterialCommunityIcons'
}, {
    name: 'CAIDAT',
    title: 'Cài Đặt',
    icon: 'settings',
    iconType: 'MaterialCommunityIcons'
}];
export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        }
    }
    async componentDidMount() {
        await firebase.auth().onAuthStateChanged((user) => {
            this.setState({ userInfo: user });
        });
        console.log('currentUser',firebase.auth().currentUser);
    }

    render() {
        const { userInfo } = this.state;
        const heightTop = deviceHeight * 0.2;
        const heightcenter = deviceHeight * 0.1;
        const heightFooter = deviceHeight * 0.1;
        const heightBottom = deviceHeight - heightTop - heightcenter - heightFooter;
        if (userInfo != null) {
            return (
                <Container>
                    <Content>
                        <Grid>
                            <Row style={{ height: heightTop }}>
                                <View style={[styles.fx1]}>
                                    <Thumbnail square source={{ uri: userInfo.photoURL }} />
                                </View>
                                <View style={[styles.fx3]}>
                                    <Text>{userInfo.displayName}</Text>
                                    <Text >{userInfo.email}</Text>
                                </View>
                            </Row>
                            <Row style={{ borderColor: '#E9E9E9', borderWidth: 1, borderStyle: 'solid', borderLeftWidth: 0, borderRightWidth: 0, height: heightcenter }}>
                                <View style={[styles.fx1, styles.jcac]}>
                                    <H1>15</H1>
                                    <Text>Thi</Text>
                                </View>
                                <View style={[styles.fx1, styles.jcac]}>
                                    <H1>15</H1>
                                    <Text>Đậu</Text>
                                </View>
                                <View style={[styles.fx1, styles.jcac]}>
                                    <H1>15</H1>
                                    <Text>Trượt</Text>
                                </View>
                            </Row>
                            <Row style={{ height: heightBottom }}>
                                <List
                                    dataArray={route}
                                    renderRow={data => {
                                        return (
                                            <ListItem icon
                                                button
                                                onPress={() => this.props.navigation.navigate(data.name)}>
                                                <Left>
                                                    <Icon name={data.icon} type={data.iconType} />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize: 15}}>{data.title}</Text>
                                                </Body>
                                                <Right />
                                            </ListItem>
                                        );
                                    }}
                                />
                            </Row>
                            <Row style={{ height: heightFooter, justifyContent: 'flex-end' }}>
                                <View>
                                    <View>
                                        <Icon name='logout-variant' type='MaterialCommunityIcons' />
                                    </View>
                                    <View>
                                        <Text>Đăng Xuất</Text>
                                    </View>
                                </View>
                            </Row>
                        </Grid>
                    </Content>
                </Container >
            );
        } else {
            return <View />
        }
    }
}