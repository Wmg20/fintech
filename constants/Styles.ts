import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 40,
    // fontWeight: "700",
    fontFamily: "OutfitBold",
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textLink: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "OutfitLight",
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 8,
    color: Colors.gray,
    fontFamily: "OutfitRegular",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "OutfitMedium",
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "OutfitMedium",
  },
  buttonTextSmall: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "OutfitMedium",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    marginBottom: 10,
    fontFamily: "OutfitMedium",
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
});
