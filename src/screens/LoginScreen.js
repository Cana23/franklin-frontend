import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { tailwind } from 'nativewind';

// Esquema de validación utilizando yup
const validationSchema = yup.object().shape({
  email: yup.string().email('Ingresa un correo electrónico válido').required('El correo electrónico es requerido'),
  password: yup.string().required('La contraseña es requerida'),
});

const LoginScreen = () => {
  // Hook de useFormik para manejar el estado del formulario
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica de inicio de sesión con los datos del formulario
      console.log('Datos del formulario:', values);
    },
  });

  return (
    <View style={tailwind('flex-1 justify-center items-center')}>
      <Text style={tailwind('text-xl font-bold mb-4')}>Iniciar Sesión</Text>
      <TextInput
        style={tailwind('input mb-2 p-2 w-64 border rounded')}
        placeholder="Correo electrónico"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {touched.email && errors.email && <Text style={tailwind('text-red-500 mb-2')}>{errors.email}</Text>}
      <TextInput
        style={tailwind('input mb-2 p-2 w-64 border rounded')}
        placeholder="Contraseña"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secureTextEntry
      />
      {touched.password && errors.password && <Text style={tailwind('text-red-500 mb-2')}>{errors.password}</Text>}
      <Button title="Iniciar Sesión" onPress={handleSubmit} />
    </View>
  );
};

export default LoginScreen;
