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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-web";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome!" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Resume" component={Resume} />
        <Stack.Screen name="Dave" component={Dave} />
        <Stack.Screen name="Stern" component={Stern} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.home}>
      <View sytle={styles.view}>
        <Button
          style={styles.button}
          title="Go to Ryan's Resume"
          onPress={() => navigation.navigate("Resume", { name: "Ryan" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Dicey Dave"
          onPress={() => navigation.navigate("Dave", { name: "Dave" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Stern"
          onPress={() => navigation.navigate("Stern", { name: "Stern" })}
        />
      </View>
    </ScrollView>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const Resume = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.ryan}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://pbs.twimg.com/media/FJZ0IZ3XIAEwpgy?format=jpg&name=large",
        }}
        style={styles.imageR}
      />
      <View style={styles.view}>
        <Text style={styles.textR}>
          Hello, my name is Ryan Kolodziejczyk. I am currently a senior at Avon
          Old Farms School in CT. I am a 3 year member of the varsity baseball
          team, along with a 2 year sub-varsity squash player, being team
          captain both years. I am a 3 year member of the investment club, 2
          year member of Special Olympics, and 1 year member of Nimrod club!{" "}
        </Text>
        <View style={{ height: 75 }} />
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home", { name: "Ryan" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Dicey Dave"
          onPress={() => navigation.navigate("Dave", { name: "Dave" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Sturdy Stern"
          onPress={() => navigation.navigate("Stern", { name: "Stern" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const Dave = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.david}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://thedirtbags.com/wp-content/uploads/2020/12/image5-1-150x150.jpeg",
        }}
        style={styles.imageD}
      />
      <View style={styles.view}>
        <Text style={styles.textD}>
          This is David McCann's page, and he is a total greasebucket who loves
          ripping fisher runs and sneaky links with tons of Porters Birds!{" "}
        </Text>
        <View style={{ height: 75 }} />
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home", { name: "Ryan" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Ryan's Resume"
          onPress={() => navigation.navigate("Resume", { name: "Ryan" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Sturdy Stern"
          onPress={() => navigation.navigate("Stern", { name: "Stern" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const Stern = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.stern}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1400799298535649284/9eLcXyZi_400x400.jpg",
        }}
        style={styles.imageS}
      />
      <View style={styles.view}>
        <Text style={styles.textS}>
          New brother AidEn Stern is very much enjoying the brotherhood, already
          totally googs gogged and fogged out of his brain. Walking around
          campus you can see the haze cloud following him around, especially
          when he is with his boy Liam Murphy (Li Murph)!{" "}
        </Text>
        <View style={{ height: 75 }} />
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home", { name: "Ryan" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Ryan's Resume"
          onPress={() => navigation.navigate("Resume", { name: "Ryan" })}
        />
        <View style={{ height: 17 }} />
        <Button
          style={styles.button}
          title="Go to Dicey Dave"
          onPress={() => navigation.navigate("Dave", { name: "Dave" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  ryan: {
    //flex: 1,
    backgroundColor: "darkslategray",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  david: {
    //flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  stern: {
    //flex: 1,
    backgroundColor: "greenyellow",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  button: {
    width: deviceWidth * 0.6,
  },

  imageR: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    height: 600,
    margin: 30,
  },

  imageD: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 450,
    height: 450,
    margin: 30,
  },

  imageS: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 500,
    margin: 30,
  },

  view: {
    width: deviceWidth * 0.6,
  },

  textR: {
    fontSize: 24,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "floralwhite",
  },

  textD: {
    fontSize: 28,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "green",
  },

  textS: {
    fontSize: 26,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "purple",
  },
});
