import React from "react";
import {
  View,
  TextInput,
  ImageBackground,
  Button,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import medicineBackground from "./../assets/medicina.png";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={medicineBackground} style={styles.background}>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Nombre" />
          <TextInput
            style={styles.input}
            placeholder="Edad"
            keyboardType="numeric"
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            secureTextEntry
          />
          <TextInput style={styles.input} placeholder="Sexo" />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            ¿Ya tienes una cuenta? Inicia sesión aquí
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
    width: 400,
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
});

export default SignupScreen;
