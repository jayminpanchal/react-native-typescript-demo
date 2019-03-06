import React from 'react';
import {View, Text} from 'react-native';

import styles from "./styles";

export default class Tab2 extends React.Component {

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Tab 2
                </Text>
            </View>
        );
    }
}