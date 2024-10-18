import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// Import Firebase core and Firestore
import firestore from '@react-native-firebase/firestore';

const addUserToFirestore = async (email: string, password: string) => {
  try {
    await firestore().collection('users').add({
      email: email,
      password: password,
      createdAt: firestore.FieldValue.serverTimestamp(), 
    });
    console.log('User added to Firestore!');
  } catch (error) {
    console.error('Error adding user to Firestore: ', error);
  }
};

// Example usage in a React component
const usersignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Insert user data into Firestore
      await addUserToFirestore(email, password);
      Alert.alert("Success", "User added to Firestore");
    } catch (error) {
     console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
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

export default usersignup;
