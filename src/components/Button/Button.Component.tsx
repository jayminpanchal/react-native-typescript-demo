import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

interface Props {
    title: string;
    onPress: any;
    style: any;
}

export default class Button extends React.Component<Props> {
    render() {
        const {title, onPress, style} = this.props;
        return (
            <TouchableOpacity style={[style, styles.buttonContainer]} onPress={onPress}>
                <Text style={styles.button}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}
