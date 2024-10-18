import { Stack } from "expo-router";

export default function MainScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >

      <Stack.Screen name="mainscreen" options={{ headerShown: false }} />
      {/* <Stack.Screen name="signup" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
