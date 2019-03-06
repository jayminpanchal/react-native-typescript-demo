import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';
import {connect} from "react-redux";

import {logOut} from "../../store/action";
import {resetSignInAction} from "../../navigation/AppContainer";
import {TouchableOpacity} from "react-native";

interface Props {
    navigation: any;
    logOut: any;
}

class LogOut extends React.Component<Props> {

    onLogOut = () => {
        this.props.logOut();
        this.props.navigation.dispatch(resetSignInAction)
    };

    render(): React.ReactNode {
        return (
            <TouchableOpacity onPress={this.onLogOut}>
                <FontAwesome name="sign-out" size={25}/>
            </TouchableOpacity>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default withNavigation(connect(null, mapDispatchToProps)(LogOut));