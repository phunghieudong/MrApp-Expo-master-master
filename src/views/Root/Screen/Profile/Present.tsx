

//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet } from "react-native";

const { mainColor, mainColorText, padding } = settings.styles;

const PresentScreen = ({ navigation }) => {
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
      <HeaderRoot title="BỆNH ÁN HIỆN TẠI" previous={() => navigation.goBack()} />
      <Content contentContainerStyle={styles.body}>
        <View style={styles.box}> 
          <Text style={styles.step}>PhungHieuDong</Text>
          <Text style={styles.text}>
            chổ này dùng để viết bệnh án hiện tại
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
  },
  step: {
    color: mainColor,
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

export default PresentScreen;
