import React from "react";

import Home from "../screens/Home";
import Login from "../screens/Login";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

type RootStackParamsList = {
  Login: undefined;
  Home: undefined;
};

interface INavigation {
  logged?: boolean;
  role?: string;
}

const Stack = createStackNavigator<RootStackParamsList>();

const Navigation: React.FC<INavigation> = ({ logged, role }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
