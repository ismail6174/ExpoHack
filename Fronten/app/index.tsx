// app/index.tsx
import { Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Index() {
  const { userToken, loading } = useContext(AuthContext);

  if (loading) return null;

  return userToken ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/(auth)/login" />
  );
}
