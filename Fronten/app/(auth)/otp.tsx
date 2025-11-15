import { View, Text, TextInput, Button, Alert } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocalSearchParams, router } from "expo-router";

export default function OTP() {
  const { email } = useLocalSearchParams();
  const { verifyOtp } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    const ok = await verifyOtp(String(email), otp);
    if (ok) {
      Alert.alert("Verified");
      router.replace("/(tabs)/home");
    } else {
      Alert.alert("Incorrect OTP");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>OTP Verification</Text>

      <TextInput placeholder="Enter OTP" keyboardType="numeric" style={{ borderWidth: 1, marginTop: 10 }} onChangeText={setOtp} />

      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
}
