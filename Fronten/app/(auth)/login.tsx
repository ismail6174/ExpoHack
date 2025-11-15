import { View, Text, TextInput, Button, Alert } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, router } from "expo-router";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const ok = await login(email, password);
    if (ok) {
      router.replace("/(tabs)/home");
    } else {
      Alert.alert("Invalid credentials");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Login</Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, marginTop: 10, padding: 8 }}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, marginTop: 10, padding: 8 }}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <Link href="/(auth)/signup" style={{ marginTop: 20 }}>
        Go to Signup
      </Link>
    </View>
  );
}
