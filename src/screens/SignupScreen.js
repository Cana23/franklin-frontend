import React from 'react';
import { View, TextInput, Button, ImageBackground, Text } from 'react-native';
import { tailwind } from 'nativewind';
import medicineBackground from './assets/medicina.png'; // Ruta a la imagen de fondo

const SignupScreen = ({ navigation }) => {
  return (
    <ImageBackground source={medicineBackground} style={tailwind('flex-1 justify-center items-center')}>
      <View style={tailwind('bg-white p-4 rounded-lg w-80')}>
        <TextInput
          style={tailwind('input mb-2 p-2 border rounded')}
          placeholder="Nombre"
        />
        <TextInput
          style={tailwind('input mb-2 p-2 border rounded')}
          placeholder="Edad"
          keyboardType="numeric"
        />
        <TextInput
          style={tailwind('input mb-2 p-2 border rounded')}
          placeholder="Correo electrónico"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={tailwind('input mb-2 p-2 border rounded')}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TextInput
          style={tailwind('input mb-2 p-2 border rounded')}
          placeholder="Confirmar Contraseña"
          secureTextEntry
        />
        <TextInput
          style={tailwind('input mb-2 p-2 border rounded')}
          placeholder="Sexo"
        />
        <Button title="Registrarse" onPress={() => navigation.navigate('Login')} />
        <Text style={tailwind('text-center mt-2 text-blue-500')} onPress={() => navigation.navigate('Login')}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
