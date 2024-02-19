import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  AsyncStorage,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppointmentForm from "../components/AppointmentForm";

const HomeScreen = () => {
  const username = "Usuario123"; // Aquí deberías obtener el nombre de usuario del estado o de la autenticación
  const [modalVisible, setModalVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem("appointments");
      if (storedAppointments !== null) {
        setAppointments(JSON.parse(storedAppointments));
      }
    } catch (error) {
      console.log("Error loading appointments:", error);
    }
  };

  const saveAppointments = async (newAppointments) => {
    try {
      await AsyncStorage.setItem(
        "appointments",
        JSON.stringify(newAppointments)
      );
    } catch (error) {
      console.error("Error saving appointments:", error);
    }
  };

  const handleAppointmentSubmission = async (newAppointment) => {
    try {
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      await AsyncStorage.setItem(
        "appointments",
        JSON.stringify(updatedAppointments)
      );
      setModalVisible(false);
    } catch (error) {
      console.log("Error saving appointment:", error);
    }
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión, por ejemplo, redireccionar a la pantalla de inicio de sesión
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="sign-out" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Home</Text>
        <Text style={styles.headerText}>{username}</Text>
      </View>
      <View style={styles.separator}></View>

      {/* Contenido */}
      <View style={styles.content}>
      <FlatList
  data={appointments}
  renderItem={({ item }) => (
    <View style={styles.appointmentItemContainer}>
      <Text style={styles.appointmentItemText}><Text style={{ fontWeight: 'bold' }}>City:</Text> {item.city}</Text>
      <Text style={styles.appointmentItemText}><Text style={{ fontWeight: 'bold' }}>Clinic:</Text> {item.clinic}</Text>
      <Text style={styles.appointmentItemText}><Text style={{ fontWeight: 'bold' }}>Doctor:</Text> {item.doctor}</Text>
      <Text style={styles.appointmentItemText}><Text style={{ fontWeight: 'bold' }}>Date:</Text> {item.date}</Text>
      <Text style={styles.appointmentItemText}><Text style={{ fontWeight: 'bold' }}>Time:</Text> {item.time}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
  extraData={appointments}
  numColumns={2} // Display two items in a row
/>

      </View>

      {/* Botón de añadir */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AppointmentForm
              setModalVisible={setModalVisible}
              onSubmit={handleAppointmentSubmission}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10, // Add horizontal padding
    paddingBottom: 80, // Add padding to accommodate the add button
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center', // Center horizontally
    backgroundColor: 'blue',
    borderRadius: 9999,
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: 300,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 8,
    marginTop: 16,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  appointmentItemContainer: {
    backgroundColor: 'lightgray',
    flexBasis: '45%', // Set the width to 45% to fit two items in a row with some spacing
    margin: 5, // Add margin around each item
    padding: 10,
    borderRadius: 10,
  },
  appointmentItemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});


export default HomeScreen;
