// app/index.tsx
import { Redirect } from "expo-router";

export default function Index() {
  // Always redirect to welcome first
  return <Redirect href="/welcome" />;
}
