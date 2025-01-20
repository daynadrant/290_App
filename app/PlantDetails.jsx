// import React from 'react';
// import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// import { useLocalSearchParams, useParams } from 'expo-router';

//     const plantDetails = {
//         Lettuce: { 
//             pH: "6.0-7.0", 
//             humidity: "60-70%", 
//             temperature: "15-20°C",
//         },
//         Kale: { 
//             pH: "6.0-7.5", 
//             humidity: "60-70%", 
//             temperature: "18-24°C",
//         },
//         Chard: { 
//             pH: "6.5-7.0", 
//             humidity: "50-60%", 
//             temperature: "16-24°C" 
//         },
//       };

//   function PlantDetails() {
//     const params = useLocalSearchParams()
//     const plant = params.plant
//     const details = plantDetails[plant];
  
//     if (!details) {
//       return (
//         <View style={styles.container}>
//           <Text>Plant not found.</Text>
//         </View>
//       );
//     }

//     return (
//     //   {/* <Stack.Screen
//     //     options={{
//     //       headerStyle: { backgroundColor: "#4CAF50" }, // Dark green background
//     //       headerTitle: "Plant Tracker", // Custom header title
//     //       headerTintColor: "#FFFFFF", // White text color for the header
//     //     }}
//     //   /> */}
//     //   {/* <View style={styles.container}>
//     //     <Text style={styles.title}>{name || "Unknown Plant"}</Text>
//     //     <Text style={styles.label}>pH Level: {data.pH}</Text>
//     //     <Text style={styles.label}>Humidity: {data.humidity}</Text>
//     //     <Text style={styles.label}>Temperature: {data.temperature}</Text> */}
//     <ScrollView style={styles.container}>  
//         <View style={styles.header}>
//             <Text style={styles.headerTitle}>{plant}</Text>
//         </View>
//         <View style={styles.contentBox}>
//         <Text style={styles.subtitle}>pH Level:</Text>
//         <Text style={styles.pH}>{details.pH}</Text>
//         <Text style={styles.subtitle}>Humidity Level:</Text>
//         <Text style={styles.humidity}>{details.humidity}</Text>
//         <Text style={styles.subtitle}>Temperature:</Text>
//         <Text style={styles.temperature}>{details.temperature}</Text>
//     </View>
//   </ScrollView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Ensures it takes up the whole screen
//     justifyContent: "center", // Centers content vertically
//     alignItems: "center", // Centers content horizontally
//     backgroundColor: "#4CAF50", // Green background
//   },
//   title: {
//     fontSize: 28, // Larger font size for the title
//     fontWeight: "bold", // Bold text for the title
//     color: "#FFFFFF", // White font color
//     marginBottom: 20, // Adds spacing below the title
//   },
//   label: {
//     fontSize: 20, // Larger font size for details
//     color: "#FFFFFF", // White font color
//     marginBottom: 10, // Adds spacing between labels
//   },
// });

// export default PlantDetails;

