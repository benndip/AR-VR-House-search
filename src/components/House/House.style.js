import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: height * 0.45,
        alignSelf:'center'
    },
    image: {
        width: '100%',
        height: '75%'
    }
});

export default styles