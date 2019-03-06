import React from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";

import styles from "./styles";

interface Props {
    user: object;
}

class Tab1 extends React.Component<Props> {

    render(): React.ReactNode {
        const {user} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Welcome User
                </Text>
                <Text style={styles.heading}>
                    {user.name}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state: object) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Tab1);