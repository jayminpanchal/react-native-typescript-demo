import React from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";

import styles from "./styles";

class Tab1 extends React.Component {

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Tab 1
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state: object) => {
    console.log("state in Home", state);
    return state;
};

export default connect(mapStateToProps)(Tab1);