import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const plantTypes = ["Lettuce", "Kale", "Chard"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [plantType, setPlantType] = useState("Lettuce");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Monitor your hydroponic garden</Text>
      </View>

      {/* <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={plantTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(plantType, item)}
              onPress={() => {
                setPlantType(item);
                //router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(plantType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View> */}
    </View>
  );
};

export default Welcome;
