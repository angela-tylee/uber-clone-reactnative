// import { useUser } from "@clerk/clerk-expo";
import profile from "@/assets/icons/profile.png";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import InputField from "@/components/input-field";

const Profile = () => {
  // const { user } = useUser();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-JakartaBold my-5">My profile</Text>

        <View className="flex items-center justify-center my-5">
          <Image
            source={profile}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className="rounded-full h-[110px] w-[110px] border-[3px] border-white bg-slate-300 shadow-sm shadow-neutral-300"
          />
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <View className="my-2 w-full">
              <Text className={`text-lg font-JakartaSemiBold mb-3`}>
                First Name
              </Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
              >
                <Text
                  className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1text-left`}
                >
                  Angela
                </Text>
              </View>
            </View>
            <View className="my-2 w-full">
              <Text className={`text-lg font-JakartaSemiBold mb-3`}>
                Last Name
              </Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
              >
                <Text
                  className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1text-left`}
                >
                  Lee
                </Text>
              </View>
            </View>
            <View className="my-2 w-full">
              <Text className={`text-lg font-JakartaSemiBold mb-3`}>Email</Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
              >
                <Text
                  className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1text-left`}
                >
                  angela@example.com
                </Text>
              </View>
            </View>
            <View className="my-2 w-full">
              <Text className={`text-lg font-JakartaSemiBold mb-3`}>Phone</Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
              >
                <Text
                  className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1text-left`}
                >
                  +000 01234 56789
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
