//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View, } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, Image } from "react-native";

const { mainColor, mainColorText, padding } = settings.styles;

const UserManualScreen = ({ navigation }) => {
  // interaction
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
      <HeaderRoot title="Hướng dẫn sử dụng" previous={() => navigation.goBack()} />
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
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <Image
              source={require("../../../../assets/images/FAQ.png")}
              style={{ height: 163, width: 370, borderRadius: 6 }}
            />
          </View>
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
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <Image
              source={require("../../../../assets/images/FAQ.png")}
              style={{ height: 163, width: 370, borderRadius: 6 }}
            />
          </View>
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
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <Image
              source={require("../../../../assets/images/FAQ.png")}
              style={{ height: 163, width: 370, borderRadius: 6 }}
            />
          </View>
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

export default UserManualScreen;

