import { View, Text, TextInput, Button, Alert } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const ok = await signup(username, email, password);
    if (ok) {
      router.push({ pathname: "/(auth)/otp", params: { email } });
    } else {
      Alert.alert("Signup failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Signup</Text>

      <TextInput placeholder="Username" style={{ borderWidth: 1, marginTop: 10 }} onChangeText={setUsername} />
      <TextInput placeholder="Email" style={{ borderWidth: 1, marginTop: 10 }} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderWidth: 1, marginTop: 10 }} onChangeText={setPassword} />

      <Button title="Create Account" onPress={handleSignup} />
    </View>
  );
}
