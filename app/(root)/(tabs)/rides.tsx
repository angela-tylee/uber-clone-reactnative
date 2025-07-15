import RideCard from "@/components/RideCard";
import { images, recentRides } from "@/constants";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Rides = () => {
  const loading = false;

  return (
    <SafeAreaView>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => {
          return (
            <View className="flex flex-col items-center justify-center">
              {!loading ? (
                <>
                  <Image
                    source={images.noResult}
                    className="w-40 h-40"
                    alt="No recent rides found"
                    resizeMode="contain"
                  />
                  <Text className="text-sm">No recent rides found</Text>
                </>
              ) : (
                <ActivityIndicator size="small" color="#000" />
              )}
            </View>
          );
        }}
        ListHeaderComponent={() => (
          <>
            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              All Rides
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Rides;
