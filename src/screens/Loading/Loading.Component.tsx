import React from 'react';
import {View} from 'react-native';
import {connect} from "react-redux";

import {resetSignInAction, resetHomeAction} from '../../navigation/AppContainer';

interface Props {
    navigation: any;
    user: any
}

class Loading extends React.Component<Props> {
    componentDidMount(): void {
        const {user} = this.props;
        this.props.navigation.dispatch(user ? resetHomeAction : resetSignInAction);
    }

    render() {
        return (
            <View/>
        );
    }
}

const mapStateToProps = (state: object) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Loading);
