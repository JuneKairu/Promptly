import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// Import Firebase core, Firestore, and Authentication
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // Import Firebase auth

const addMemo = async (title: string, description: string, voice: string, userid: string, additional: string) => {
  try {
    await firestore().collection('users').add({
      title: title,
      description: description,
      voice: voice,
      userid: userid,
      additional: additional,
      createdAt: firestore.FieldValue.serverTimestamp(), 
    });
    console.log('Memo added to Firestore!');
  } catch (error) {
    console.error('Error adding memo to Firestore: ', error);
  }
};

const Memocreate: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [voice, setVoice] = useState<string>("");
  const [additional, setAdditional] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userid, setUserid] = useState<string | null>(null); // To store the logged-in user's UID

  // Get the current user's UID when the component mounts
  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUserid(currentUser.uid); // Set the user's UID to state
    }
  }, []);

  const handleMemoCreation = async () => {
    if (!userid) {
      Alert.alert("Error", "User not logged in.");
      return;
    }
    setLoading(true);
    try {
      // Insert user data into Firestore
      await addMemo(title, description, voice, userid, additional);
      Alert.alert("Success", "Memo added to Firestore");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Memo</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Voice"
        value={voice}
        onChangeText={setVoice}
      />
      <TextInput
        style={styles.input}
        placeholder="Additional Information"
        value={additional}
        onChangeText={setAdditional}
      />
      <Button
        title={loading ? "Saving..." : "Save Memo"}
        onPress={handleMemoCreation}
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

export default Memocreate;
