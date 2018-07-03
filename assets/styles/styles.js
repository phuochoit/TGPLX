import { StyleSheet, Dimensions, Platform } from "react-native";
const colorfff = '#fff';
export const backgroundColorDefault = '#2ABF88';


export const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    fx1: {
        flex: 1,
    },
    fx2: {
        flex: 2,
    },
    fx3: {
        flex: 3,
    },
    fx4: {
        flex: 4,
    },
    fx5: {
        flex: 5,
    },
    pda: {
        padding: 10,
    },
    jcac: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerbg: {
        backgroundColor: '#E9E9E9',
    },
    textcolorfff: {
        color: '#fff'
    },
    fontSizedefault: {
        fontSize: 16,
    },
    headerWrapper:{
        backgroundColor: backgroundColorDefault, 
        borderTopColor: '#fff', 
        borderTopWidth: 1,
        borderStyle: 'solid' 
    },
    headerwrapperLeft: {
        flex: 0.3
    },
    headerwrapperRight: {
        flex: 0.3,
        alignItems: 'flex-end'
    },
    headerwrapperCenter: {},
});

