import { Redirect } from "expo-router";
// import { Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// FIXME: 37:08 splash.png
const Home = () => {
  return (
    // <SafeAreaView>
    //   <Text>Home</Text>
    // </SafeAreaView>
    // <Redirect href="/(root)/(tabs)/home" />
    <Redirect href="/(auth)/welcome" />
  );
};

export default Home;
