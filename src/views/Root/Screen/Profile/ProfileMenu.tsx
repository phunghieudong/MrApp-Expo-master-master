//@ts-nocheck

import React, { FC, useState } from "react";
import { View, Text } from "native-base";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { ProfileMenuProps } from "@/navigation/types/Profile";
import { _format } from "@/utils";



const ProfileMenuScreen: FC<ProfileMenuProps> = ({
  navigation,
  route: { params },
}) => {



  return (
    <View>
        <Text>Phunghieudong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default ProfileMenuScreen;
