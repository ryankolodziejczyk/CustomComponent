import React, { Component } from "react";
import { TouchableOpacity } from "react-native-web";
import { Text, StyleSheet, View } from "react-native";

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert("this is a button")}>
        <View style={styles.button}>
          <Text> Example!! </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
  },
});
