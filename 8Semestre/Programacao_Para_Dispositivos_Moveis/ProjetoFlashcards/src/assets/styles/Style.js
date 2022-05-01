import { backgroundDefault } from "./Color";
import { Dimensions, StyleSheet } from "react-native";



 export const StyleDefault = StyleSheet.create({

    buttonDefault: {
        height: 45,
        justifyContent: 'center',
        fontSize: 140,
        marginTop: 10
    },
    container: {
        backgroundColor: backgroundDefault,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    }
})

// export default StyleDefault;