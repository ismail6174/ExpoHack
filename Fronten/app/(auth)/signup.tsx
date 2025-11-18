import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const ok = await signup(username, email, password);
    if (ok) {
      router.push({ pathname: "/(auth)/otp", params: { email } });
    } else {
      Alert.alert("Signup failed");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#E8FFF9" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS: padding, Android: height
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // adjust for header if needed
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text style={styles.header}>MediCare</Text>
        <Text style={styles.subHeader}>Create an Account</Text>

        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="person" size={20} color="#1abc9c" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#9ca3af"
              value={username}
              onChangeText={setUsername}
            />
          </View>
        </View>

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

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={20} color="#1abc9c" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#9ca3af"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirm}
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)} style={styles.eyeButton}>
              <MaterialIcons name={showConfirm ? "visibility" : "visibility-off"} size={20} color="#1abc9c" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.loginWrapper}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginLink} onPress={() => router.push("/(auth)/login")}>
              Log In
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
  signupButton: { 
    marginTop: 20, 
    width: "100%", 
    height: 50, 
    borderRadius: 12, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#16a085"
  },
  signupButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  loginWrapper: { marginTop: 16 },
  loginText: { color: "#333333", fontSize: 14 },
  loginLink: { color: "#1abc9c", fontWeight: "bold" },
});
