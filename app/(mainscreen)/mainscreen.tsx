import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// Import Firebase core and Firestore
import firestore from "@react-native-firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";

const MainScreen: React.FC = () => {
  const [memo, setMemo] = useState<string>(""); // State for memo input
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle adding memo to Firestore
  const addMemo = async () => {
    if (memo.trim() === "") {
      Alert.alert("Error", "Please enter a memo.");
      return;
    }

    setLoading(true);
    try {
      await firestore().collection("memos").add({
        text: memo,
        createdAt: firestore.FieldValue.serverTimestamp(), 
      });
      Alert.alert("Success", "Memo added!");
      setMemo(""); 
    } catch (error) {
      console.error("Error adding memo: ", error);
      Alert.alert("Error", "Could not add memo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add a Memo</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your memo here"
        value={memo}
        onChangeText={setMemo}
      />
      <Button
        title={loading ? "Adding..." : "Add Memo"}
        onPress={addMemo}
        disabled={loading}
      />
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

export default MainScreen;

  //TRY KO PANI
  
// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// // Import Firebase core, Firestore, and Auth
// import firestore from "@react-native-firebase/firestore";
// import auth from "@react-native-firebase/auth";
// import { SafeAreaView } from "react-native-safe-area-context";

// const MainScreen: React.FC = () => {
//   const [memo, setMemo] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [user, setUser] = useState<any>(null); // State to hold user info

//   // Function to get the current user
//   const getCurrentUser = () => {
//     const currentUser = auth().currentUser;
//     if (currentUser) {
//       setUser(currentUser);
//     } else {
//       console.log("No user is logged in.");
//     }
//   };

//   // Call getCurrentUser when component mounts
//   useEffect(() => {
//     getCurrentUser();
//   }, []);

//   const addMemo = async () => {
//     if (memo.trim() === "") {
//       Alert.alert("Error", "Please enter a memo.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await firestore().collection("memos").add({
//         text: memo,
//         createdAt: firestore.FieldValue.serverTimestamp(),
//         userId: user?.uid, // Store user ID with the memo
//       });
//       Alert.alert("Success", "Memo added!");
//       setMemo("");
//     } catch (error) {
//       console.error("Error adding memo: ", error);
//       Alert.alert("Error", "Could not add memo.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Add a Memo</Text>
//       {user ? (
//         <Text>Logged in as: {user.email}</Text> // Display the logged-in user's email
//       ) : (
//         <Text>No user is logged in.</Text>
//       )}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your memo here"
//         value={memo}
//         onChangeText={setMemo}
//       />
//       <Button
//         title={loading ? "Adding..." : "Add Memo"}
//         onPress={addMemo}
//         disabled={loading}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 24,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 12,
//     fontSize: 16,
//   },
// });

// export default MainScreen;
