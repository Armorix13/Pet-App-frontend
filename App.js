import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Forget from "./screens/Forget";
import Splash from "./screens/Splash";
import Verification from "./screens/Verification";
import NewPassword from "./screens/NewPassword";
import PasswordChanged from "./screens/PasswordChanged";
import ButtomTabLayout from "./screens/ButtomTabLayout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forget"
          component={Forget}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="new-password"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="password-changed"
          component={PasswordChanged}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={ButtomTabLayout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
