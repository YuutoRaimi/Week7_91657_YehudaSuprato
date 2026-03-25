import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Navigation List</Text>

      <Link href="/email" asChild>
        <Button title="Go to Email Screen" />
      </Link>
      <Link href="/userList" asChild>
        <Button title="Go to User List Page" color="green" />
      </Link>
    </View>
  );
}
