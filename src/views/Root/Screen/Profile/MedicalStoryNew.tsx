//@ts-nocheck
import { HeaderRoot } from "@/components";
import { Container } from "native-base";
import React, { FC, useState } from "react";
import { View, Text } from "native-base";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { NoteList, Diagnosis, Information } from "../../Block/MedicalStoryNew";
import { MedicalStoryNewProps } from "@/navigation/types/Profile";
import { _format } from "@/utils";
import { TabView } from "react-native-tab-view";
import { settings } from "@/config";
 
const { width: dW } = Dimensions.get("window");
const { blueColor } = settings.styles;

const MedicalStoryNewScreen: FC<MedicalStoryNewProps> = ({
  navigation,
  route: { params },
}) => {
  // tab views
  const [menu, setMenu] = useState(0);

  return (
    <Container>
      <HeaderRoot title="TIỂU SỬ PhungHieuDong" previous={() => navigation.goBack()} />
   <View>
    <Text>PhungHIeuDong</Text>
   </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  menucontainer: {
    backgroundColor: "#F0F0F0",
    flexGrow: 0,
    flexShrink: 0,
  },
  menu: {
    paddingTop: 15,
    paddingBottom: 17,
  },
  menutext: {
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 1.5,
    color: "rgba(0, 0, 0, .5)",
    fontFamily: "SFProDisplay-Bold",
    paddingLeft: 25,
    paddingRight: 25,
  },
  menuline: {
    position: "absolute",
    left: 0,
    top: 15,
    bottom: 17,
    width: 1,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  body: {
    flex: 1,
  },
});

export default MedicalStoryNewScreen;
