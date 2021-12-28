import React from 'react';
import OnBoardScreen from '../Screen/OnBoardScreen/OnBoardScreen';
import LogInScreen from '../Screen/LogInScreen/LogInScreen';
import RegisterScreen from '../Screen/RegisterScreen/RegisterScreen';
import BottomNavigator from '../Navigation/BottomNavigator';
import DrawerNavigator from '../Navigation/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import FlashScreen from '../../Flash/FlashScreen';
import HomeScreen from '../Screen/HomeScreen/HomeScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Stack.Navigator  >
                <Stack.Screen name="Welcome" component={FlashScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}
                    options={{ headerMode: false }}
                />
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={{ headerMode: false }}
                /> */}
                <Stack.Screen name="LogInScreen" component={LogInScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator}
                    options={{ headerMode: false }}

                />
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            </Stack.Navigator>
        </View>

    );
};

export default StackNavigator;