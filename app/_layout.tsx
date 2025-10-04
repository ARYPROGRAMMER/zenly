import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

function RootLayoutWithAuth() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // render loading state
  }

  return (
    <Stack>
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen name="(protected)" />
      </Stack.Protected>
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="(public)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <RootLayoutWithAuth />
    </ClerkProvider>
  );
}
