import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tailwind } from 'nativewind';
import { FontAwesome } from '@expo/vector-icons';
import AppointmentForm from '../components/AppointmentForm';

const HomeScreen = () => {
  const username = "Usuario"; // Aquí deberías obtener el nombre de usuario del estado o de la autenticación
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={tailwind('flex-1')}>
      {/* Encabezado */}
      <View style={tailwind('flex-row justify-between items-center p-4')}>
        <Text style={tailwind('text-lg font-bold')}>Inicio</Text>
        <Text style={tailwind('text-lg')}>{username}</Text>
      </View>

      {/* Contenido */}
      <View style={tailwind('flex-1')}></View>

      {/* Botón de añadir */}
      <TouchableOpacity style={tailwind('bg-blue-500 p-4 rounded-full absolute bottom-10 right-10')} onPress={() => setModalVisible(true)}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={tailwind('flex-1 justify-center items-center bg-gray-800 bg-opacity-75')}>
          <View style={tailwind('bg-white p-4 rounded-lg w-80')}>
            <AppointmentForm />
            <TouchableOpacity style={tailwind('bg-red-500 p-2 mt-2 rounded')} onPress={() => setModalVisible(false)}>
              <Text style={tailwind('text-white text-center')}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
