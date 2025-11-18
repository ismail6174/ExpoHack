import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const ok = await login(email, password);
    if (ok) {
      router.replace("/(tabs)/home");
    } else {
      Alert.alert("Invalid credentials");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#E8FFF9" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.header}>MediCare</Text>
        <Text style={styles.subHeader}>Login to Your Account</Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="mail" size={20} color="#1abc9c" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={20} color="#1abc9c" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#9ca3af"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
              <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color="#1abc9c" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <View style={styles.signupWrapper}>
          <Text style={styles.signupText}>
            Dont have an account?{" "}
            <Text style={styles.signupLink} onPress={() => router.push("/(auth)/signup")}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: { fontSize: 32, fontWeight: "bold", color: "#1abc9c", marginBottom: 4 },
  subHeader: { fontSize: 24, fontWeight: "600", color: "#333333", marginBottom: 20, textAlign: "center" },
  inputContainer: { width: "100%", marginBottom: 12 },
  label: { marginBottom: 6, fontSize: 14, fontWeight: "500", color: "#333333" },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#e7dbcf", borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 12 },
  icon: { marginRight: 8 },
  input: { flex: 1, height: 48, fontSize: 16, color: "#333333" },
  eyeButton: { padding: 4 },
  loginButton: { 
    marginTop: 20, 
    width: "100%", 
    height: 50, 
    borderRadius: 12, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#16a085"
  },
  loginButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  signupWrapper: { marginTop: 16 },
  signupText: { color: "#333333", fontSize: 14 },
  signupLink: { color: "#1abc9c", fontWeight: "bold" },
});
