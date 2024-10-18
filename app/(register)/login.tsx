import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// Import Firebase core and Firestore
import { useRouter } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";


const getUserFromFirestore = async (email: string, password: string) => {
  try {
    // Query Firestore to find a user document with the matching email and password
    const userQuerySnapshot = await firestore()
      .collection("users")
      .where("email", "==", email)
      .where("password", "==", password) // Check the password in plain text
      .get();

    // Check if any documents match the query
    if (!userQuerySnapshot.empty) {
      return userQuerySnapshot.docs[0].data(); // return the first matching user data
    } else {
      console.log("No user found with this email and password");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user from Firestore: ", error);
  }
};

const LoginInScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Get the user from Firestore by email and password
      const userData = await getUserFromFirestore(email, password);

      if (userData) {
        Alert.alert("Success", "Login successful");
        router.push("../(mainscreen)/mainscreen");
      } else {
        Alert.alert("Error", "Incorrect email or password");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={loading ? "Logging in..." : "Login"}
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
});

export default LoginInScreen;
