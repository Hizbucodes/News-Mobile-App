import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Easing,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "../constants/Colors";
import { WelcomeScreenProps } from "../navigations/NavigationTypes";
import Feather from "@expo/vector-icons/Feather";

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const duration: number = 1000;
  const easing = Easing.linear;
  const sv = useSharedValue<number>(0);

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, {
        duration: duration,
        easing: easing,
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: sv.value * 20 }],
  }));
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
            <TouchableOpacity
              style={styles.btnPressable}
              onPress={() => navigation.replace("Home")}
            >
              <Text style={styles.btnText}>Get Started</Text>
              <Animated.View style={[styles.arrowRightIcon, animatedStyle]}>
                <Feather name="arrow-right" size={35} color={Colors.white} />
              </Animated.View>
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
    fontSize: 18,
    textAlign: "center",
  },
  btnPressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  arrowRightIcon: {
    position: "absolute",
    right: 20,
  },
});
