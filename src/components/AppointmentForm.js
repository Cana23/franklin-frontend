import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { tailwind } from 'nativewind';

const AppointmentForm = () => {
    const [city, setCity] = useState('');
    const [clinic, setClinic] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleAppointmentSubmission = () => {
        // TODO: lógica para enviar la cita al backend
        console.log('Cita enviada:', { city, clinic, doctor, date, time });
        setModalVisible(false);
      };

  return (
    <View>
      <Text style={tailwind('text-lg font-bold mb-2')}>Agendar Cita</Text>
      <TextInput
        style={tailwind('input mb-2 p-2 border rounded')}
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={tailwind('input mb-2 p-2 border rounded')}
        placeholder="Consultorio"
        value={clinic}
        onChangeText={setClinic}
      />
      <TextInput
        style={tailwind('input mb-2 p-2 border rounded')}
        placeholder="Doctor"
        value={doctor}
        onChangeText={setDoctor}
      />
      <TextInput
        style={tailwind('input mb-2 p-2 border rounded')}
        placeholder="Fecha (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={tailwind('input mb-2 p-2 border rounded')}
        placeholder="Hora (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Agendar" onPress={handleAppointmentSubmission} />
    </View>
  );
};

export default AppointmentForm;
