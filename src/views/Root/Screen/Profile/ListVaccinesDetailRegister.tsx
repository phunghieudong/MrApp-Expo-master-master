//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View, Toast } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, TouchableOpacity, Image, TextInput, } from "react-native";
import { useNavigation } from "@react-navigation/core";
const { mainColor, mainColorText, padding } = settings.styles;

const ListVaccinesDetailRegisterScreen = () => {
  // interaction
  const navigation = useNavigation();

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
        <View style={{ paddingTop: 18, flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
          <Image
            source={require("../../../../assets/images/ListVaccines.png")}
            style={{ height: 16, width: 16 }}
          />
          <Text style={{ fontSize: 16, color: '#FB8500', paddingHorizontal: 5 }}>Chọn loại vaccine chưa tiêm để có lịch tiêm
            sớm nhất </Text>

        </View>

        <View style={styles.box}>

          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderColor: "#666666",
              }}
              placeholder="Họ và tên*"


            />

          </View>
          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderColor: "#666666",
              }}
              placeholder="Email*"

            />

          </View>
          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderColor: "#666666",
              }}
              placeholder="Số điện thoại*"


            />

          </View>
          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderColor: "#666666",
              }}
              placeholder="Ngày tiêm*"


            />

          </View>

        </View>
        <TouchableOpacity onPress={() =>
          Toast.show({ text: "Tính năng còn đang phát triển" })
        }>
          <View style={{
            backgroundColor: '#142977', borderRadius: 100, width: 150, height: 53, justifyContent: 'center', alignItems: 'center'
          }}>
            <Text style={{ fontSize: 16, color: '#ffffff', fontFamily: 'SFProDisplay-Bold' }}>ĐĂNG KÝ TIÊM</Text>
          </View>
        </TouchableOpacity>
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

    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 30

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

export default ListVaccinesDetailRegisterScreen;
