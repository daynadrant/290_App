import { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
//import { WebView } from "react-native-webview";

// Simulated data for plants
const plantDetails = {
    Lettuce: { 
        pH: "6.1", 
        // humidity: "60-70%", 
        // temperature: "15-20°C",
    },
    Kale: { 
        pH: "N/A", 
        humidity: "N/A", 
        temperature: "N/A",
    },
    Chard: { 
        pH: "N/A", 
        humidity: "N/A", 
        temperature: "N/A" 
    },
  };

function DetailsScreen() {
  const params = useLocalSearchParams()
  const plant = params.plant
  // const details = plantDetails[plant];

  const [sensorData, setSensorData] = useState({ temperature: null, humidity: null });
  const [loading, setLoading] = useState(plant === "Lettuce"); // Only load for Lettuce

  //Fetch sensor data for Lettuce
  useEffect(() => {
    if (plant === "Lettuce") {
      const fetchData = async () => {
        try {
          const response = await fetch('http://192.168.2.139/data'); // Replace with Arduino's IP
          const data = await response.json();
          setSensorData(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching sensor data:', error);
          setLoading(false);
        }
      };

      fetchData();
      const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [plant]);

  const details = plantDetails[plant];

  if (!details) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Plant not found.</Text>
      </View>
    );
  }


  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Plant Details",
          headerStyle: { backgroundColor: "#4CBB17" },
          headerTintColor: "white",
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{plant}</Text>
        </View>
        
        <View style={styles.contentBox}>
          {/* Dynamic or N/A pH */}
          <Text style={styles.subtitle}>pH Level:</Text>
          <Text style={styles.detailText}>
            {plant === "Lettuce"
              ? loading
                ? "Loading..."
                : `${sensorData.pH}`
              : details.pH}
          </Text>

          {/* Dynamic or N/A humidity */}
          <Text style={styles.subtitle}>Humidity Level:</Text>
          <Text style={styles.detailText}>
            {plant === "Lettuce"
              ? loading
                ? "Loading..."
                : `${sensorData.humidity}%`
              : details.humidity}
          </Text>

          {/* Dynamic or N/A temperature */}
          <Text style={styles.subtitle}>Temperature:</Text>
          <Text style={styles.detailText}>
            {plant === "Lettuce"
              ? loading
                ? "Loading..."
                : `${sensorData.temperature}°C`
              : details.temperature}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFFFD6",
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#4CBB17', // Header background
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  contentBox: {
    padding: 20,
    backgroundColor: '#4CBB17', // Light green background for the content box
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20, // Adjust as needed
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color : '#023020'
  },
  detailText: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  videoContainer: {
    height: 200, // Adjust height as needed
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },
  video: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default DetailsScreen;