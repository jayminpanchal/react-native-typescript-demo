import {StyleSheet, ViewStyle, TextStyle} from "react-native";

import Color from '../../utils/colors';

interface Style {
    buttonContainer: ViewStyle;
    button: TextStyle;
}

const styles = StyleSheet.create<Style>({
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 4,
        backgroundColor: Color.DARK
    },
    button: {
        fontSize: 15,
        color: Color.LIGHT,
        textAlign: "center"
    }
});
export default styles;