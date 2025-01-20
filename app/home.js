import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Stack, router } from "expo-router";

import { COLORS, icons, images, SIZES, FONT } from "../constants";
import {
  ScreenHeaderBtn,
} from "../components";

const plants = [
  {
    id: "1",
    name: "Lettuce",
    image: require("../assets/lettuce.png"), // Replace with your image path
  },
  {
    id: "2",
    name: "Kale",
    image: require("../assets/kale.png"), // Replace with your image path
  },
  {
    id: "3",
    name: "Chard",
    image: require("../assets/chard.png"), // Replace with your image path
  },
];

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightGreen },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "Home",
          headerTintColor: "white",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View>
          <Text style={styles.welcomeMessage}>Monitor your hydroponic garden</Text>
        </View>

        {/* Plant Buttons Section */}
        <View style={styles.plantList}>
          {plants.map((plant) => (
            <TouchableOpacity
            key={plant.id}
            style={styles.card}
            onPress={() => 
              router.push({ 
                pathname: "/details", 
                params: { plant: plant.name },
              })
            }
          >
              <Image source={plant.image} style={styles.image} />
              <Text style={styles.name}>{plant.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGreen,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16, // Adjust for consistent spacing
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: COLORS.primary,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    textAlign: 'center',
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  plantList: {
    marginTop: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E8B57", // Dark green background
    padding: 24,
    marginVertical: 12,
    borderRadius: 12,
    elevation: 5, // Shadow for depth
  },
  image: {
    width: 70, // Image size
    height: 70,
    borderRadius: 35, // Rounded image
    marginRight: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF", // White text
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default Home;
