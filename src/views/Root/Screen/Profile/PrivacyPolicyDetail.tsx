//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const { mainColor, mainColorText, padding } = settings.styles;

const PrivacyPolicyDetailScreen = ({ navigation }) => {
  // interaction



  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true);
    });
  }, []);

  if (!ready) {
    return <Loading />;
  }

  return (
    <Container style={styles.container}>
      <HeaderRoot title="Chính sách" filter={true} previous={() => navigation.goBack()} />
      <Content contentContainerStyle={styles.body}>
        <View style={styles.box}>
          <Text style={styles.step}>Hướng dẫn sử dụng ứng dụng 1</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Text style={styles.text}>
            At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </Text>
         
        </View>
        <View style={styles.box}>
          <Text style={styles.step}>Hướng dẫn sử dụng ứng dụng 2</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Text style={styles.text}>
            At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </Text>
        
        </View>
        <View style={[styles.box, { borderBottomWidth: 0 }]}>
          <Text style={styles.step}>Hướng dẫn sử dụng ứng dụng 3</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Text style={styles.text}>
            At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </Text>
        
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flexGrow: 1,
    paddingHorizontal: padding,
  },
  box: {

    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0000003a",
    paddingHorizontal: 20
  },
  step: {
    color: "#000000",
    fontSize: 20,
    fontFamily: "SFProDisplay-Heavy",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: mainColorText,
    marginTop: 15,
    fontFamily: "SFProDisplay-Regular",

  },
});

export default PrivacyPolicyDetailScreen;


