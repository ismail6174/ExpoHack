import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocalSearchParams, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function OTP() {
  const { email } = useLocalSearchParams();
  const { verifyOtp } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    const ok = await verifyOtp(String(email), otp);
    if (ok) {
      Alert.alert("Verified");
      router.replace("/(auth)/login");
    } else {
      Alert.alert("Incorrect OTP");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>MediCare</Text>
      <Text style={styles.subHeader}>OTP Verification</Text>

      {/* OTP Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter OTP</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="vpn-key" size={20} color="#1abc9c" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#9ca3af"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#E8FFF9",
    alignItems: "center",
    justifyContent: "center", // center vertically
  },
  header: { fontSize: 32, fontWeight: "bold", color: "#1abc9c", marginBottom: 4 },
  subHeader: { fontSize: 24, fontWeight: "600", color: "#333333", marginBottom: 20, textAlign: "center" },
  inputContainer: { width: "100%", marginBottom: 12 },
  label: { marginBottom: 6, fontSize: 14, fontWeight: "500", color: "#333333" },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#e7dbcf", borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 12 },
  icon: { marginRight: 8 },
  input: { flex: 1, height: 48, fontSize: 16, color: "#333333" },
  verifyButton: {
    marginTop: 20,
    width: "100%",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16a085", // darker green button
  },
  verifyButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
