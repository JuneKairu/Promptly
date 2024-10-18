import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageContainer}
            source={require("../../assets/images/tormarch38 1.png")}
          />
        </View>

        <View style={styles.titlelogo}>
          <Text style={styles.titleText}>Promptly</Text>
          <Text style={styles.subtitleText}>
            Stay organized, productive, and stress-free.
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Link href="/login" style={styles.link}>
              Login
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignUp}>
            <Link href="/neyenye" style={{color:'#934CDB', textTransform:'uppercase',}}>
              Signup
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    marginTop: "10%",
    width: "80%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  titlelogo: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  titleText: {
    fontSize: 20,
    color: "#3D1763",
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 16,
    color: "#939393",
    textAlign: "center",
  },
  bottomContainer: {
    width: "100%",
    marginTop: "auto",
    marginBottom: 20,
    padding:20,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
    textTransform:'uppercase',
  },
  buttonLogin: {
    
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    padding:15,
    width: "100%",
    backgroundColor: "#934CDB",
    marginBottom:15,
  },
  buttonSignUp: {
    textTransform:'uppercase',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    padding:15,
    width: "100%",
    backgroundColor: "#fff",
    marginBottom:15,
    borderWidth:1,
    borderColor:'#939393'
  },
});
