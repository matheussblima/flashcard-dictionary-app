import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from '@config/index'

export default () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
};