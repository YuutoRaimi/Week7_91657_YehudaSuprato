import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import Animated, { FadeInDown } from "react-native-reanimated"; // <-- Import Reanimated
import styles from "./Appstyles";
import userData from "./data.json";

export default function UserList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((user, index) => (
        <Animated.View
          key={index}
          entering={FadeInDown.delay(index * 300).springify()}
        >
          <Card style={styles.card}>
            <Link
              href={{
                pathname: "/profile",
                params: {
                  userName: user.name,
                  userEmail: user.email,
                  userPhoto: user.photo_url,
                },
              }}
              asChild
            >
              <TouchableOpacity style={styles.cardContent}>
                <Avatar.Image size={70} source={{ uri: user.photo_url }} />
                <View style={styles.textContainer}>
                  <Text variant="titleMedium" style={styles.userNameText}>
                    {user.name}
                  </Text>
                  <Text variant="bodyMedium" style={styles.userEmailText}>
                    {user.email}
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
          </Card>
        </Animated.View>
      ))}
    </ScrollView>
  );
}
