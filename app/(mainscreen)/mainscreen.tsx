import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// Import Firebase core and Firestore
import firestore from "@react-native-firebase/firestore";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// const addUserToFirestore = async (email: string, password: string) => {
//   try {
//     await firestore().collection("users").add({
//       email: email,
//       password: password,
//       createdAt: firestore.FieldValue.serverTimestamp(),
//     });
//     console.log("User added to Firestore!");
//   } catch (error) {
//     console.error("Error adding user to Firestore: ", error);
//   }
// };

// Example usage in a React component
const mainScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  //   const handleLogin = async () => {
  //     setLoading(true);
  //     try {
  //       // Insert user data into Firestore
  //       await addUserToFirestore(email, password);
  //       Alert.alert("Success", "User added to Firestore");
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <SafeAreaView>
      <View>
        <Text>hi!</Text>
      </View>
    </SafeAreaView>
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

export default mainScreen;
