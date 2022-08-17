import { TabBar } from "@/components";
import { ContactScreen, NotificationScreen, TutorialScreen, NewsMennuScreen,AccoountmenuScreen } from "@/views";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import { RootStackParamList } from "./types";

const Tab = createBottomTabNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      {/* home */}
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Taikhoan" component={AccoountmenuScreen} />
      <Tab.Screen name="Chat" component={NewsMennuScreen} />
      {/* Tu van  */}
      <Tab.Screen name="Advise" component={TutorialScreen} />
      {/* Lien he */}
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="Notification" component={NotificationScreen} />

      {/* <Tab.Screen name="News" component={NotificationScreen} /> */}
    </Tab.Navigator>
  );
};

export default RootStackNavigator;
