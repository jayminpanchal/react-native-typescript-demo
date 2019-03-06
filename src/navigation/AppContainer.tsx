import React from 'react';
import {StackActions, NavigationActions, createStackNavigator, createAppContainer} from 'react-navigation';

import Loading from '../screens/Loading/Loading.Component';
import SignIn from '../screens/SignIn/SignIn.Component';
import SignUp from '../screens/SignUp/SignUp.Component';
import HomeTab from './HomeTab';
import LogOut from '../components/LogOut/LogOut.Component';

export const resetHomeAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})],
});

export const resetSignInAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'SignIn'})],
});

export const AppNavigator = createStackNavigator({
    Loading: {
        screen: Loading,
        navigationOptions: {
            header: null
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up'
        }
    },
    Home: {
        screen: HomeTab,
        navigationOptions: {
            title: 'Home',
            headerRight: <LogOut/>
        }
    }
}, {initialRouteName: 'Loading'});

export default createAppContainer(AppNavigator);
