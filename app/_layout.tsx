import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider, useAuth } from "../context/auth";
import "./globals.css";

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen 
          name="(auth)" 
          options={{ headerShown: false }} 
          redirect={!isAuthenticated}
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
          redirect={isAuthenticated}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
 