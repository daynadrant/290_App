import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LettuceDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lettuce</Text>
      <Text style={styles.label}>pH Level: 6.0-7.0</Text>
      <Text style={styles.label}>Humidity: 60-70%</Text>
      <Text style={styles.label}>Temperature: 15-20°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },
});

export default LettuceDetails;
