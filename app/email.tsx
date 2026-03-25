import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import styles from "./Appstyles";

export default function Email() {
  return (
    <View style={styles.container}>
      <Text>Email List Page</Text>
      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}
