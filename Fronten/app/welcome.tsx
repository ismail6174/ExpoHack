import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function WelcomeScreen() {
  const router = useRouter();
  const { userToken } = useContext(AuthContext);

  const handleGoToSignup = () => router.push("/signup");
  const handleGoToLogin = () => router.push("/login");

  const handleContinue = () => {
    if (userToken) router.replace("/(tabs)/home");
    else router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      {/* Central Icon */}
      <View style={styles.iconWrapper}>
        <MaterialIcons name="medical-services" size={60} color="#1abc9c" />
      </View>

      {/* App Name */}
      <Text style={styles.title}>MediCare</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>Your Health, Simplified.</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={handleGoToSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleGoToLogin}>
        <Text style={[styles.buttonText, { color: "#fff" }]}>Login</Text>
      </TouchableOpacity>

      {/* Optional: skip welcome if already logged in */}
      <TouchableOpacity onPress={handleContinue} style={{ marginTop: 20 }}>
        <Text style={{ color: "#fff", textDecorationLine: "underline" }}>Continue as User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1abc9c", // primary gradient start
  },
  iconWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 16,
  },
  buttonText: {
    color: "#1abc9c",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
});
