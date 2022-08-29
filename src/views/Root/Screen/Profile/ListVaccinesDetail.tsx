//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, TouchableOpacity, Image } from "react-native";

const { mainColor, mainColorText, padding } = settings.styles;

const ListVaccinesDetailScreen = ({ navigation }) => {
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
      <HeaderRoot title="LỊCH TIÊM CHỦNG" previous={() => navigation.goBack()} />
      <Content contentContainerStyle={styles.body}>

        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
          <Image
            source={require("../../../../assets/images/FAQ.png")}
            style={{ height: 163, width: 370, borderRadius: 6 }}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.step}>Phòng bạch cầu, ho gà, uốn ván</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Text style={styles.text}>
            At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna
          </Text>

        </View>
        <View style={{
          backgroundColor: '#142977', borderRadius: 100, width: 150, height: 53, justifyContent: 'center', alignItems: 'center'
        }}>
          <Text style={{ fontSize: 16, color: '#ffffff', fontFamily: 'SFProDisplay-Bold' }}>ĐĂNG KÝ TIÊM</Text>
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

export default ListVaccinesDetailScreen;
