import React from 'react';
import {View, AsyncStorage} from 'react-native';
import {connect} from "react-redux";
import Snackbar from 'react-native-snackbar';

import {resetHomeAction} from '../../navigation/AppContainer';
import InputText from '../../components/InputText/InputText.Component';
import Button from '../../components/Button/Button.Component';
import {setUser} from '../../store/action';
import {isValidEmail} from "../../utils/validation";

import styles from './styles';
import {KEY_USERS} from "../../utils/constant";

interface Props {
    navigation: object;
    setUser: any;
}

interface State {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
}

class SignIn extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    }

    onSignIn = async () => {
        console.log("state", this.state);
        const {email, password} = this.state;
        let emailError, passwordError;
        let isError = false;
        if (!email || !isValidEmail(email)) {
            isError = true;
            emailError = "Invalid Email";
        }
        if (!password) {
            isError = true;
            passwordError = "Invalid Password";
        }
        this.setState({emailError, passwordError});
        if (isError) return;
        let users = await AsyncStorage.getItem(KEY_USERS);

        users = !users ? [] : JSON.parse(users);

        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            Snackbar.show({
                title: 'Invalid Login details',
            });
            return;
        }

        this.props.setUser(user);
        this.props.navigation.dispatch(resetHomeAction);
    };

    onSignUp = () => {
        this.props.navigation.navigate("SignUp");
    };

    onChange = (name, value) => {
        this.setState({
            [name]: value
        })
    };

    render(): React.ReactNode {
        const {email, password, emailError, passwordError} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <InputText label="Email" name="email" onChangeText={this.onChange} value={email}
                               error={emailError}/>
                    <InputText label="Password" name="password" onChangeText={this.onChange} value={password}
                               secureTextEntry={true}
                               error={passwordError}/>
                    <Button title="Sign In" onPress={this.onSignIn}/>
                </View>
                <Button title="Sign Up" onPress={this.onSignUp}/>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUser: (payload: object) => dispatch(setUser(payload))
    };
};

export default connect(null, mapDispatchToProps)(SignIn);