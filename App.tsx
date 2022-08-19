
//@ts-nocheck
import "react-native-gesture-handler";
import AppNavigator from "@/navigation/AppNavigator";
import store from "@/store";
import React, { useState } from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Root, View } from "native-base";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    "GoogleSans-Bold": require("./src/assets/fonts/GoogleSans-Bold.ttf"),
    "GoogleSans-Regular": require("./src/assets/fonts/GoogleSans-Regular.ttf"),
    "SFProDisplay-Bold": require("./src/assets/fonts/SFProDisplay-Bold.ttf"),
    "SFProDisplay-Heavy": require("./src/assets/fonts/SFProDisplay-Heavy.ttf"),
    "SFProDisplay-Light": require("./src/assets/fonts/SFProDisplay-Light.ttf"),
    "SFProDisplay-Medium": require("./src/assets/fonts/SFProDisplay-Medium.ttf"),
    "SFProDisplay-Regular": require("./src/assets/fonts/SFProDisplay-Regular.ttf"),
    "SFProDisplay-Semibold": require("./src/assets/fonts/SFProDisplay-Semibold.ttf"),
  });
};

const App = (props) => {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setReady(true)}
        onError={() => console.log("ERROR FETCH FONTS")}
      />
    );
    };

  return (
    <Provider store={store}>
      <Root>
        <AppNavigator {...props} />
      </Root>
    </Provider>


  );
};

export default App;