import { View, Text, StyleSheet,Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import safeareaviewbg from "@/safeareaview";
export default function HomeScreen() {
  return (
    <SafeAreaView style={safeareaviewbg.safeareaviewbg}>
      <View style={styles.container}>
        <View style={{}}>
          <Image source={require("../../assets/images/t")} />
        </View>

        <Link href="/login">login</Link>
        <Link href="/neyenye">signup</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center",
    alignItems: "center",
  },
});
