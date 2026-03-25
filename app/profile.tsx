import { Link, useLocalSearchParams } from "expo-router";
import { Button, Image, Text, View } from "react-native";

export default function Profile() {
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName: string;
    userEmail: string;
    userPhoto: string;
  }>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <Image
        source={{ uri: userPhoto }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {userName}'s Profile
        </Text>
        <Text>{userEmail}</Text>
      </View>
      <Link href="/home" asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}
