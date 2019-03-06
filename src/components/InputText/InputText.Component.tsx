import React from 'react';
import {TextInput, View, Text} from 'react-native';

import Color from '../../utils/colors';
import styles from './styles';

interface Props {
    label: string;
    name: string;
    onChangeText: any;
    value: string;
    error: string;
    secureTextEntry: boolean;
}

export default class InputText extends React.Component<Props> {
    render() {
        const {label, name, onChangeText, error} = this.props;
        return (
            <View style={styles.inputTextContainer}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput {...this.props}
                           style={styles.inputText}
                           underlineColorAndroid={Color.DARK}
                           onChangeText={(value) => onChangeText(name, value)}/>
                <Text style={styles.inputError}>{error}</Text>
            </View>
        );
    }
}
