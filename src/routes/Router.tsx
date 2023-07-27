import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Login"}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Cadastro"}
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Home"} component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
