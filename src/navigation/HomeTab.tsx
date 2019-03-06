import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from 'react-navigation';

import Tab1 from '../screens/Tab1/Tab1.Component';
import Tab2 from '../screens/Tab2/Tab2.Component';
import Tab3 from '../screens/Tab3/Tab3.Component';
import Tab4 from '../screens/Tab4/Tab4.Component';

export default createBottomTabNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarIcon: () => {
                return <FeatherIcon name="activity"/>;
            }
        }
    },
    Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarIcon: () => {
                return <FeatherIcon name="activity"/>;
            }
        }
    },
    Tab3: {
        screen: Tab3,
        navigationOptions: {
            tabBarIcon: () => {
                return <FeatherIcon name="activity"/>;
            }
        }
    },
    Tab4: {
        screen: Tab4,
        navigationOptions: {
            tabBarIcon: () => {
                return <FeatherIcon name="activity"/>;
            }
        }
    },
});
