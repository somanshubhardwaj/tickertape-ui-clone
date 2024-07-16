import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function HomeScreen() {
  return (
    <View className="">
      <View className="bg-[#161d27] px-2 text-white">
        <SafeAreaView>
          <View className="my-6 flex-row justify-between items-center">
            <View>
              <Text className="text-white text-2xl font-semibold">
                tickertape
              </Text>
            </View>
            <View className="flex-row gap-2">
              <Ionicons name="notifications" size={24} color="white" />
              <MaterialCommunityIcons
                name="face-man-profile"
                size={24}
                color="white"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="bg-[#161d27] px-2 text-white">
          <View className="flex-row my-6 gap-2">
            <View className="flex-row px-4  bg-[#ffffff10] rounded-lg items-center justify-center gap-2">
              <View>
                <Text className="text-white">NIFTY 50 </Text>
              </View>
              <View className="flex-row items-center justify-center">
                <Octicons name="triangle-up" size={34} color="green" />
                <Text className="text-[#1bac58]"> 0.11%</Text>
              </View>
            </View>
            <View className="flex-row px-4  bg-[#ffffff10] rounded-lg items-center justify-center gap-2">
              <View>
                <Text className="text-white">SENSEX </Text>
              </View>
              <View className="flex-row items-center justify-center">
                <Octicons name="triangle-up" size={34} color="green" />
                <Text className="text-[#1bac58]"> 0.06%</Text>
              </View>
            </View>
          </View>
          <View className="">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-lg font-semibold">
                The market is in greed zone
              </Text>
              <View className="flex-row items-center">
                <Text className="text-[#1978c0] text-xl font-semibold">
                  Daily
                </Text>
                <Entypo name="select-arrows" size={14} color="#1978c0" />
              </View>
            </View>
          </View>
          <View className="h-6 w-full"></View>
        </View>

        <View className="px-2 py-6 ">
          <View className="flex-row bg-[#cbcbcb35] shadow-lg border border-gray-100 items-center rounded-lg px-3 ">
            <Ionicons name="search-sharp" size={24} color="black" />
            <TextInput
              placeholder="Search for stocks, ETFs, etc."
              className=" text-black p-4  rounded-lg "
              placeholderTextColor={"black"}
            />
          </View>
          <View className="h-10 w-full"></View>
          <View className="">
            <View className="flex-row items-center justify-between">
              <View className="flex-row gap-2 items-center">
                <Text className="text-xl font-semibold">Your portfolio</Text>
                <AntDesign name="eye" size={20} color="#bbc0c6" />
              </View>
              <View className="flex-row items-center">
                <Text className="text-[#1978c0] text-xl font-semibold">
                  Today
                </Text>
                <Entypo name="select-arrows" size={14} color="#1978c0" />
              </View>
            </View>
            <View className="h-10 w-full"></View>
            <View className="flex-row justify-between items-center">
              <Text className="text-3xl font-semibold">₹18,592</Text>
              <View className="flex-row items-center">
                <Octicons name="triangle-up" size={38} color="green" />
                <Text className="text-[#1bac58] text-3xl font-bold">
                  {" "}
                  0.11%
                </Text>
              </View>
            </View>

            <View className="h-5 w-full bg-[#1978c0] rounded-lg my-2"></View>
            {/* create diversifiction view here */}
            <View className="h-10 w-full"></View>
            <Text className="text-lg text-[#acadaf] my-2">
              Check how diversified your mutual fund investments are!
            </Text>
            <View className="flex-row gap-2">
              <View className="bg-black rounded-xl p-5 flex-1 items-center justify-center">
                <Text className="text-xl font-semibold text-white">
                  Sync MFs
                </Text>
              </View>
              <View className=" rounded-xl p-5 flex-1 items-center justify-center border border-gray-400">
                <Text className="text-xl font-semibold ">See Portfolio</Text>
              </View>
            </View>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
