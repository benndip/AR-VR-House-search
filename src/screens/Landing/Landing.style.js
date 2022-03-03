import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    image: {
        width: 300,
        height: 200,
        top: height * 0.1,
        position: 'absolute',
        alignSelf: 'center'
    },
    largeText: {
        top: height * 0.55,
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 25,
        color: '#ecf0f1',
        zIndex: 99999,
        textAlign: 'center'
    },
    smallText: {
        top: height * 0.67,
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 16,
        color: '#ff793f',
        zIndex: 99999,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    poweredByDr: {
        bottom: 30,
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 14,
        color: '#ffffff',
        zIndex: 99999,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    exploreBtn: {
        width: width * 0.75,
        height: 45,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        top: height * 0.77,
        backgroundColor: '#130f40',
        borderRadius: 10
    },
    exploreTxt: {
        color: '#ffffff', 
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 3
    },
    welcomeText: {
        position: 'absolute',
        alignSelf: 'center',
        top: height * 0.1,
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 25,
        letterSpacing: 4
    }
});

export default styles