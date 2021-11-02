import * as React from 'react';

import CountryListScreen from '../modules/countrylist';
import HomeScreen from '../modules/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CountryListScreen" component={CountryListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppStack;