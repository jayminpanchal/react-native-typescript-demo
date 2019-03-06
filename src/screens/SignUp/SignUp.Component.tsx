import React from 'react';
import {View, AsyncStorage} from 'react-native';
import {connect} from "react-redux";
import Snackbar from 'react-native-snackbar';

import InputText from '../../components/InputText/InputText.Component';
import Button from '../../components/Button/Button.Component';
import {setUser} from '../../store/action';

import styles from "./styles";
import {isValidEmail} from "../../utils/validation";
import {KEY_USERS} from "../../utils/constant";
import {resetHomeAction} from "../../navigation/AppContainer";

interface Props {
    navigation: any;
    setUser: any;
}

interface State {
    name: string;
    email: string;
    password: string;
    nameError: string;
    emailError: string;
    passwordError: string;
}

class SignUp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            nameError: '',
            emailError: '',
            passwordError: ''
        }
    }

    onSignUp = async () => {
        const {name, email, password} = this.state;
        let nameError, emailError, passwordError;
        let isError = false;
        if (!email || !isValidEmail(email)) {
            isError = true;
            nameError = "Invalid Email";
        }
        if (!name) {
            isError = true;
            emailError = "Invalid Name";
        }
        if (!password) {
            isError = true;
            passwordError = "Invalid Password";
        }
        this.setState({nameError, emailError, passwordError});
        if (isError) return;

        let users = await AsyncStorage.getItem(KEY_USERS);
        users = !users ? [] : JSON.parse(users);

        const existUser = users.find(user => user.email === email);
        if (existUser) {
            Snackbar.show({
                title: 'User already exist',
            });
            return;
        }

        users.push({name, email, password});
        await AsyncStorage.setItem(KEY_USERS, JSON.stringify(users));
        this.props.setUser({name, email, password});
        this.props.navigation.dispatch(resetHomeAction);
    };

    onChange = (name, value) => {
        this.setState({
            [name]: value
        })
    };

    render(): React.ReactNode {
        const {name, email, password, nameError, emailError, passwordError} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <InputText label="Name" name="name" onChangeText={this.onChange} value={name} error={nameError}/>
                    <InputText label="Email" name="email" onChangeText={this.onChange} value={email}
                               error={emailError}/>
                    <InputText label="Password" name="password" onChangeText={this.onChange} value={password}
                               secureTextEntry={true}
                               error={passwordError}/>
                    <Button title="Sign Up" onPress={this.onSignUp}/>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUser: (payload: object) => dispatch(setUser(payload))
    };
};

export default connect(null, mapDispatchToProps)(SignUp);