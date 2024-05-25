import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  return (
    <View>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
        />
      )}
      <View style={styles.titleContainer}>
        <Text style={[defaultStyles.header, { color: Colors.lightGray }]}>
          Ready to change the way you spend money?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link
          href={"./login"}
          style={[
            defaultStyles.pillButton,
            { backgroundColor: Colors.gray, flex: 1 },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={defaultStyles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"./signup"}
          style={[
            defaultStyles.pillButton,
            { backgroundColor: Colors.gray, flex: 1 },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={defaultStyles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  video: {
    height: "100%",
    width: Dimensions.get("window").width,
  },

  titleContainer: {
    top: 20,
    zIndex: 1000,
    position: "absolute",
    padding: 16,
  },

  buttonContainer: {
    bottom: 20,
    zIndex: 1000,
    position: "absolute",
    padding: 16,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  titleText: {
    color: "white",
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  button: {
    flex: 1,
    backgroundColor: Colors.dark,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 48 / 2,
  },
});

export default Page;
