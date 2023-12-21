import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Home = ({ onStartDetection }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Object Detection App</Text>
      <TouchableOpacity style={styles.button} onPress={onStartDetection}>
        <Text style={styles.buttonText}>Start Detection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Home;
