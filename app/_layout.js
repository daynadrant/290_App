import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
  initialRouteName: "home", // Ensure the initial route is set to "home"
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      {/* You can define global options for headers here if needed */}
    </Stack>
  );
};

export default Layout;
