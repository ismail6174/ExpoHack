import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Profile</Text>

      {user && (
        <>
          <Text>Name: {user.username}</Text>
          <Text>Email: {user.email}</Text>
        </>
      )}

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
