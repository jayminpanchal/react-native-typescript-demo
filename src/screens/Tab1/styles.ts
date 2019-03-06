import {StyleSheet, ViewStyle, TextStyle} from "react-native";

import Color from '../../utils/colors';

interface Style {
    container: ViewStyle;
    heading: TextStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    heading: {
        textAlign: "center",
        fontSize: 20,
        color: Color.DARK
    }
});
export default styles;