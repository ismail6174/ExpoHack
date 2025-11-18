// app/_layout.tsx
import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../app/context/ThemeContext"; // import theme provider

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="welcome"
        />
      </AuthProvider>
    </ThemeProvider>
  );
}







// // app/_layout.tsx
// import { Stack } from "expo-router";
// import { AuthProvider } from "../context/AuthContext";

// export default function RootLayout() {
//   return (
//     <AuthProvider>
//       <Stack
//         screenOptions={{ headerShown: false }}
//         initialRouteName="welcome" // set welcome screen as default
//       />
//     </AuthProvider>
//   );
// }
