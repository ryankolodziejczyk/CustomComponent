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
import { Button } from "react-native";

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
          options={{ title: "Welcome to my Halloween Game!" }}
        />
        <Stack.Screen name="House" component={house} />
        <Stack.Screen name="Street" component={street} />
        <Stack.Screen name="Backyard" component={backyard} />
        <Stack.Screen name="HallLeft" component={left} />
        <Stack.Screen name="HallRight" component={right} />
        <Stack.Screen name="Outside" component={outside} />
        <Stack.Screen name="Group" component={group} />
        <Stack.Screen name="Dogs" component={dogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.homeScreen}>
      <View style={{ height: 60 }} />
      <View style={styles.view}>
        <Image
          source={{
            uri: "https://static01.nyt.com/images/2012/10/25/garden/25HAUNTED_SPAN/25HAUNTED_SPAN-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          }}
          style={styles.creepyHouse}
        />
        <Text style={styles.textMain}>
          Welcome to the horror game, you have approched this house and now have
          3 choices, whether to go inside, ignore it and go down the street, or
          walk around to the backyard. Click one of the following options to
          advance and good luck, you'll need it.{" "}
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Go Route 1: into the house"
          onPress={() => navigation.navigate("House", { name: "House" })}
        />
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Go Route 2: go down the street"
          onPress={() => navigation.navigate("Street", { name: "Street" })}
        />
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Go Route 3: go to the backyard"
          onPress={() => navigation.navigate("Backyard", { name: "Backyard" })}
        />
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const house = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.house}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://thumbs.dreamstime.com/b/scary-hallway-walkway-abandoned-building-67298046.jpg",
        }}
        style={styles.imageH}
      />
      <View style={styles.view}>
        <Text style={styles.textHouse}>
          The inside of the house is very creepy, as there are cobwebs
          everywhere along with flickering lights and an odd smell. You walk
          down the main hallway and encounter a dead end, where you can either
          go left or right. Which way do you choose to go?
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="lightslategray"
          title="Take a left"
          onPress={() => navigation.navigate("HallLeft", { name: "HallLeft" })}
        />
        <View style={{ height: 17 }} />
        <Button
          color="lightslategray"
          title="Take a right"
          onPress={() =>
            navigation.navigate("HallRight", { name: "HallRight" })
          }
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const left = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.hallway}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/38/Light_at_the_end_of_tunnel_%28633321722%29.jpg",
        }}
        style={styles.lightHall}
      />
      <View style={styles.view}>
        <Text style={styles.textHall}>
          Down this left hallway you see a bright light at the end of the
          hallway. You see a door leading out of the house, which is relieving
          since this house is starting to creep you out. The clown that lives
          here sees you however so you have to hurry to get out in time!
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="lightslategray"
          title="Run out the door"
          onPress={() => navigation.navigate("Outside", { name: "Outside" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const right = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.hallway}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://i.insider.com/59d5260c2ff6306f008b4ae9?width=750&format=jpeg&auto=webp",
        }}
        style={styles.clown}
      />
      <View style={styles.view}>
        <Text style={styles.textHall}>
          Down this right hallway you see in the darkness a figure staring at
          you. As you walk closer you realize it is the killer clown that lives
          in the house! You have made the wrong choice in taking the right
          hallway, as the clown kills you. Try again!
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="lightslategray"
          title="Restart"
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const street = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.streetB}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://images.pond5.com/silhouetted-group-three-men-walk-085487593_prevstill.jpeg",
        }}
        style={styles.streetI}
      />
      <View style={styles.view}>
        <Text style={styles.streetT}>
          You have chosen to go down the street, but in the distance there is a
          big group of men in black capes staring you down! You can either turn
          around and enter the house for safety or continue down the street and
          confront the group.{" "}
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Go back and enter the house"
          onPress={() => navigation.navigate("House", { name: "House" })}
        />
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Confront the men"
          onPress={() => navigation.navigate("Group", { name: "Group" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const group = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.men}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://media.tenor.com/UfPLyBPJsCkAAAAd/jumped-getting-beat-up.gif",
        }}
        style={styles.menI}
      />
      <View style={styles.view}>
        <Text style={styles.streetT}>
          You decide to approach the men. As you get closer you realize that
          they are armed and you are most definitly not supposed to be there.
          They all start to charge at you and you slowly realize this is the end
          for you. Try again!
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Restart"
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const outside = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.outsideB}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://twincitiesmom.com/wp-content/uploads/2020/03/iStock-1056955538-e1583246468951.jpg",
        }}
        style={styles.outsideI}
      />
      <View style={styles.view}>
        <Text style={styles.outsideT}>
          You made it out safely and can now go on with your life! Halloween
          sure is a scary time.
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="navy"
          title="Go on Another Adventure!"
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const backyard = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.backyardB}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8RuyYyuS0yTCnYVzpr9Qdo0Ldr3A0mJt1Q&usqp=CAU",
        }}
        style={styles.backyardI}
      />
      <View style={styles.view}>
        <Text style={styles.backyardT}>
          You managed to make it around the back of the house and have made it
          to the backyard. You see some dogs caged to chains on the right side
          of the yard, and behind them is a way out to make it to safety. You
          can tell that the chains aren't long enough for the dogs to reach you!
          You can either choose to walk to presumed safety or enter the house
          and try your luck inside?{" "}
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Go back and enter the house"
          onPress={() => navigation.navigate("House", { name: "House" })}
        />
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Go past the dogs to escape"
          onPress={() => navigation.navigate("Dogs", { name: "Dogs" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const dogs = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.dogB}>
      <View style={{ height: 60 }} />
      <Image
        source={{
          uri: "https://leerburg.com/Photos/articles/main/dogattack.jpg",
        }}
        style={styles.dogs}
      />
      <View style={styles.view}>
        <Text style={styles.streetT}>
          You decide to walk to the dogs to get free. Then as you get closer you
          realize it was a trap, as the chains are broken at the fence and the
          dogs are not held back by anything. They start to charge at you and
          you realize you definitly should have tested your luck inside the
          house. Try again!
        </Text>
        <View style={{ height: 17 }} />
        <Button
          color="black"
          title="Restart"
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        />
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    width: deviceWidth * 0.6,
    alignItems: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  homeScreen: {
    //flex: 1,
    backgroundColor: "saddlebrown",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    maxWidth: deviceWidth,
  },

  house: {
    //flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  hallway: {
    //flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  men: {
    flex: 1,
    backgroundColor: "saddlebrown",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  dogB: {
    //flex: 1,
    backgroundColor: "saddlebrown",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  streetB: {
    //flex: 1,
    backgroundColor: "saddlebrown",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  backyardB: {
    //flex: 1,
    backgroundColor: "saddlebrown",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  outsideB: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: deviceWidth,
  },

  creepyHouse: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    height: 400,
    margin: 10,
  },

  imageH: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 800,
    height: 533,
    margin: 10,
  },

  clown: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 750,
    height: 562,
    margin: 30,
  },

  menI: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 640,
    height: 288,
    margin: 30,
  },

  lightHall: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 517,
    height: 640,
    margin: 10,
  },

  dogs: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 800,
    height: 500,
    margin: 10,
  },

  outsideI: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
    height: 267,
    margin: 30,
  },

  streetI: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 960,
    height: 540,
    margin: 30,
  },

  backyardI: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 900,
    height: 600,
    margin: 30,
  },

  textMain: {
    fontSize: 24,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "black",
    textAlign: "center",
  },

  textHouse: {
    fontSize: 28,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "ivory",
    textAlign: "center",
  },

  textHall: {
    fontSize: 28,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "ivory",
    textAlign: "center",
  },

  outsideT: {
    fontSize: 28,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "floralwhite",
    textAlign: "center",
  },

  streetT: {
    fontSize: 28,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "black",
    textAlign: "center",
  },

  backyardT: {
    fontSize: 26,
    margin: 12,
    fontFamily: "Baskerville-SemiBold",
    color: "black",
    textAlign: "center",
  },
});
