import React from "react";
import {
  View,
  TextInput,
  ImageBackground,
  Button,
  Text,
  StyleSheet,
} from "react-native";
import medicineBackground from "./../assets/medicina.png";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={medicineBackground} style={styles.background}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
          />
          <Button
            title="Iniciar sesión"
            onPress={() => navigation.navigate("Home")}
          />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Signup")}
          >
            ¿No tienes una cuenta? Regístrate aquí
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    opacity: 0.6,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
});

export default LoginScreen;
