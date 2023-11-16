import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "@screens/index"


const Stack = createNativeStackNavigator();
export function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}