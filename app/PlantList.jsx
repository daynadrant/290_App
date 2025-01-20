import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

const PlantList = () => {
  //const router = useRouter();

  // const plants = [
  //   {
  //     id: "1",
  //     name: "Lettuce",
  //     image: require("../assets/lettuce.png"),
  //     component: "/lettuce-details", // Pass component directly
  //   },
  //   {
  //     id: "2",
  //     name: "Kale",
  //     image: require("../assets/kale.png"),
  //     component: "/kale-details", // Pass component directly
  //   },
  //   {
  //     id: "3",
  //     name: "Chard",
  //     image: require("../assets/chard.png"),
  //     component: "/chard-details", // Pass component directly
  //   },
  // ];

  const plants = ['Lettuce', 'Kale', 'Chard'];

  // const handlePress = (route) => {
  //   console.log("Navigating to route:", route); // Debugging log
  //   router.push(route); // Navigate directly to the hardcoded route
  // };

  // const handlePress = (Component) => {
  //   router.push(Component); // Navigate to the component directly
  // };

  return (
    // <FlatList
    //   data={plants}
    //   keyExtractor={(item) => item.id}
    //   renderItem={({ item }) => (
    //     <TouchableOpacity
    //       style={styles.card}
    //       // onPress={() => handlePress(item.component)}
    //       onPress={() => router.push("/lettuce-details")}
    //     >
    //       <Image source={item.image} style={styles.image} />
    //       <Text style={styles.name}>{item.name}</Text>
    //     </TouchableOpacity>
    //   )}
    //   contentContainerStyle={styles.list}
    // />
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Category</Text>
      </View>
      
      <Text style={styles.title}>Choose your Destination!</Text>
      {plants.map((places) => (
        <TouchableOpacity
          key={places} // Unique key for each plant
          style={styles.touchableOpacity}
          onPress={() => {
            router.push({
              pathname: "/PlantDetails", // Navigate to the PlantDetails.jsx page
              params: { plant: places }, // Pass the plant name as a parameter
            });
          }}
        >
          <Text style={styles.buttonText}>{places}</Text>
        </TouchableOpacity>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#2E8B57",
    padding: 20,
    borderRadius: 14,
    elevation: 6,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 24,
    borderRadius: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default PlantList;
