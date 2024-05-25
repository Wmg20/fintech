import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const onSignin = async () => {};

const Page = () => {
  const [countryCode, setcountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const keyboardOffeset = Platform.OS === "ios" ? 90 : 0;

  const handlePhoneNumber = (text: string) => {
    setPhoneNumber(text);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardOffeset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome Back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated to your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={countryCode}
            style={[styles.input, { flexShrink: 1, maxWidth: 70 }]}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            inputMode="tel"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            inputMode="tel"
            value={phoneNumber}
            onChangeText={(text) => handlePhoneNumber(text)}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignin}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={[defaultStyles.buttonText, { color: Colors.gray }]}>
            or
          </Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              gap: 8,
              marginTop: 20,
              backgroundColor: Colors.lightGray,
            },
          ]}
        >
          <Ionicons name="mail" size={24} color={Colors.dark} />
          <Text style={[defaultStyles.buttonText, { color: Colors.dark }]}>
            Sign in with email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              gap: 8,
              marginTop: 20,
              backgroundColor: Colors.lightGray,
            },
          ]}
        >
          <Ionicons name="logo-google" size={24} color={Colors.dark} />
          <Text style={[defaultStyles.buttonText, { color: Colors.dark }]}>
            Sign in with google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: "row",
              gap: 8,
              marginTop: 20,
              backgroundColor: Colors.lightGray,
            },
          ]}
        >
          <Ionicons name="logo-apple" size={24} color={Colors.dark} />
          <Text style={[defaultStyles.buttonText, { color: Colors.dark }]}>
            Sign in with apple
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
    gap: 10,
  },

  input: {
    backgroundColor: Colors.lightGray,
    padding: 16,
    borderRadius: 16,
    fontSize: 20,
    fontFamily: "OutfitRegular",
  },

  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
