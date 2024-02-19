import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AppointmentForm = ({ setModalVisible, onSubmit }) => {
  const [city, setCity] = useState('');
  const [clinic, setClinic] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    // Validate form fields
    if (!city || !clinic || !doctor || !date || !time) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new appointment object
    const newAppointment = { city, clinic, doctor, date, time };

    // Call the onSubmit callback with the new appointment
    onSubmit(newAppointment);

    // Reset form fields
    setCity('');
    setClinic('');
    setDoctor('');
    setDate('');
    setTime('');
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Agendar Cita</Text>
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Consultorio"
        value={clinic}
        onChangeText={setClinic}
      />
      <TextInput
        style={styles.input}
        placeholder="Doctor"
        value={doctor}
        onChangeText={setDoctor}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Agendar" onPress={handleSubmit} />
    </View>
  );
};

const styles = {
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
};

export default AppointmentForm;
