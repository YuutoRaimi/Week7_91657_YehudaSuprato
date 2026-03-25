import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: 325,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  textContainer: {
    flex: 1,
  },
  userNameText: {
    fontWeight: "bold",
    color: "#000",
  },
  userEmailText: {
    textDecorationLine: "underline",
    color: "#444",
  },
});

export default styles;
