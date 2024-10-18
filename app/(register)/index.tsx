import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/login">login</Link>
      <Link href="/neyenye">signup</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
