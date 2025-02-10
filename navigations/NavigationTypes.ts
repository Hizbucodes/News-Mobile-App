import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    Welcome: undefined,
    Home: undefined,
    Discover: undefined,
    Saved: undefined,
    Profile: undefined,
};

export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">