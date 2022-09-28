import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { CustomButton } from "./Button.js";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://pbs.twimg.com/media/FJZ0IZ3XIAEwpgy?format=jpg&name=large",
        }}
        style={styles.image}
      />
      <View style={styles.view}>
        <Text style={styles.text}>
          Hello, my name is Ryan Kolodziejczyk. I am currently a senior at Avon
          Old Farms School in CT. I am a 3 year member of the varsity baseball
          team, along with a 2 year sub-varsity squash player, being team
          captain both years. I am a 3 year member of the investment club, 2
          year member of Special Olympics, and 1 year member of Nimrod club!
        </Text>
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "darkslategray",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 512,
    height: 512,
    margin: 30,
  },

  view: {
    width: deviceWidth * 0.6,
  },

  text: {
    fontSize: 24,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "floralwhite",
  },
});
