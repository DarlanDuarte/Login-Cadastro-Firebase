import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

interface IHomeProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}

const Home: React.FC<IHomeProps> = ({ navigation, route }) => {
  async function Logout() {
    const auth = getAuth();
    await signOut(auth)
      .then((value) => {
        console.log(`Deslogado com sucesso!`);
        navigation.navigate("Login");
      })
      .catch((e) => console.warn(e.message));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View>
        <Animatable.Text
          animation={"slideInLeft"}
          duration={2000}
          style={styles.title}
        >
          Pagina Home
        </Animatable.Text>

        <Animatable.Text
          animation={"slideInLeft"}
          duration={2000}
          style={styles.title}
        >
          {route.params?.user}
        </Animatable.Text>

        <TouchableOpacity onPress={Logout}>
          <Animatable.Text
            animation={"slideInUp"}
            duration={2000}
            style={{
              fontSize: 24,
              textAlign: "center",
              color: "#ac5b26",
              marginTop: 15,
              fontWeight: "600",
            }}
          >
            Logout
          </Animatable.Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {},
  title: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "900",
    color: "#ac5b26",
  },
  text: {},
});

export default Home;
