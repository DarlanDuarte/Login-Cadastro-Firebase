import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { app } from "../services/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { NavigationProp } from "@react-navigation/native";

if (!app.automaticDataCollectionEnabled) {
  app.automaticDataCollectionEnabled = true;
}

const Login: React.FC<{ navigation: NavigationProp<any> }> = ({
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Login() {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log(`login com sucesso! ${value.user.email}`);
        navigation.navigate("Home", { user: value.user.email });
      })
      .catch((e) => {
        console.warn(e.message);
        return;
      });

    setEmail("");
    setPassword("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        animation={"flipInY"}
        duration={2000}
        style={styles.img}
        resizeMode={"cover"}
        source={require("../../assets/img/CoffeeLogo.png")}
      />

      <Animatable.View
        animation={"fadeInUp"}
        duration={2000}
        style={styles.wrapper}
      >
        <Animatable.Text
          animation={"fadeInLeft"}
          duration={2000}
          style={styles.title}
        >
          Login
        </Animatable.Text>
        <Text style={styles.textInput}> Email: </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.textInput}> Senha: </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Animatable.Text style={styles.textBtnCadastro}>
            Clique para Cadastrar!
          </Animatable.Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Login} style={styles.btn}>
          <Text style={styles.textBtn}> Acessar </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eedabf",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  img: {
    width: "80%",
    height: 400,
  },
  wrapper: {
    width: "100%",
    height: "45%",
    backgroundColor: "#cc9d68",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 36,
    color: "#f3f5f3",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    fontSize: 24,
    marginLeft: 5,
    color: "#f3f5f3",
    marginTop: 15,
  },
  input: {
    paddingVertical: 10,
    backgroundColor: "#f3f5f3",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: "#000",
    fontWeight: "400",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#ac5b26",
    paddingVertical: 15,
    marginHorizontal: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#f3f5f3",
    fontWeight: "900",
    fontSize: 19,
  },
  textBtnCadastro: {
    fontSize: 14,
    color: "#f3f5f3",
    marginLeft: 15,
    marginTop: 5,
  },
});

export default Login;
