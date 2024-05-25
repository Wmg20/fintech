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
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const onSignup = async () => {};

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
        <Text style={defaultStyles.header}>Let's get started</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you the confirmation code
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

        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>

        {/* push button to the end */}
        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
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
