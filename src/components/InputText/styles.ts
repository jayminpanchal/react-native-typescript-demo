import {StyleSheet, ViewStyle, TextStyle} from "react-native";

import Color from '../../utils/colors';

interface Style {
    inputTextContainer: ViewStyle;
    inputLabel: TextStyle;
    inputText: TextStyle;
    inputError: TextStyle;
}

const styles = StyleSheet.create<Style>({
    inputTextContainer: {
        marginBottom: 10
    },
    inputLabel: {
        color: Color.DARK
    },
    inputText: {
        height: 40
    },
    inputError: {
        color: 'red'
    }
});
export default styles;