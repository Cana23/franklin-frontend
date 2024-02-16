import React from 'react';
import { View, TextInput, Button, ImageBackground } from 'react-native';
import { tailwind } from 'nativewind';
import medicineBackground from './assets/medicina.png';

const LoginScreen = () => {
  return (
    <ImageBackground source={medicineBackground} style={tailwind('flex-1 justify-center items-center')}>
      <View style={tailwind('bg-white p-4 rounded-lg w-80')}>
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
        <Button title="Iniciar Sesión" onPress={handleLogin} />
        <Text style={tailwind('text-center mt-2 text-blue-500')} onPress={() => navigation.navigate('Signup')}>¿No tienes una cuenta? Regístrate aquí</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;