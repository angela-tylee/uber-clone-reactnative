// Onboarding doesn't need a tab bar, so it needs a separate layout.
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
