import { View, Text, StyleSheet,Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
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
