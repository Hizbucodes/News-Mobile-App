import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import Animated, { FadeInRight } from "react-native-reanimated";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/welcome-screen-image.jpg")}
      >
        <View style={styles.wrapper}>
          <Animated.Text
            entering={FadeInRight.delay(300).duration(500).springify()}
            style={styles.title}
          >
            Stay Updated
          </Animated.Text>
          <Animated.Text
            entering={FadeInRight.delay(700).duration(500).springify()}
            style={styles.description}
          >
            Get breaking news and personalized updates directly to your feed.
          </Animated.Text>
          <Animated.View
            style={styles.btn}
            entering={FadeInRight.delay(1200).duration(500).springify()}
          >
            <TouchableOpacity>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.4)",
    paddingHorizontal: 50,
    paddingBottom: 100,
  },
  title: {
    fontWeight: "bold",
    color: Colors.white,
    fontSize: 24,
    letterSpacing: 1.5,
  },
  description: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    letterSpacing: 1.2,
    lineHeight: 22,
    paddingTop: 20,
  },
  btn: {
    backgroundColor: Colors.tint,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 50,
    width: "100%",
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 17,
  },
});
