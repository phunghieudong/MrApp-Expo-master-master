//@ts-nocheck
import { HeaderRoot } from "@/components";
import { settings } from "@/config";
import { Container, Text, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

const { padding, blueColor, mainColorText, dangerColor } = settings.styles;

const Index = () => {
  return (
    <View style={[styles.item]}>
      <View style={{
        flexDirection: 'row',

      }}>
        <View style={styles.left}>
          <View style={{ height: 87, width: 87 }}>
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 87, width: 87 }}
            />
          </View>
        </View>
        <View style={{ justifyContent: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, color: '#FB8500' }}>25/07/21</Text>
              <Text style={{ fontSize: 14, color: '#666666' }}> | </Text>
              <Text style={{ fontSize: 14, color: '#666666' }}>09:00 ~ 10:00</Text>
            </View>
            <Text style={styles.hospital}>Bệnh viện Hòa Hảo</Text>
            <Text style={styles.position}>
              Tên mũi chích
            </Text>
          </View>


          <View style={styles.flex}>
            <View style={[styles.btn, { backgroundColor: "#142977" }]}>
              <Text style={[styles.btntext, { color: "#fff" }]}>
                XÁC NHẬN
              </Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btntext}>HỦY</Text>
            </View>

          </View>


        </View>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: padding,
  },
  item: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#CACEE1",


  },
  left: {
    marginRight: 12,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  word: {
    color: "#fff",
    fontFamily: "SFProDisplay-Bold",
    letterSpacing: 2,
  },

  date: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: mainColorText,
  },
  paid: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Bold",
    color: "#142977",
  },
  hospital: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    fontFamily: "SFProDisplay-Semibold",
    color: mainColorText,
  },
  position: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "SFProDisplay-Regular",
    color: "rgba(0, 0, 0, .6)",
  },
  flex: {
    flexDirection: "row",
    marginTop: 11,
    paddingTop: 25
  },
  btn: {
    marginRight: 12,
    backgroundColor: '#FFDDDD',
    minWidth: 100,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 100,
  },
  btntext: {
    color: dangerColor,
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1.25,
    fontFamily: "SFProDisplay-Regular",
  },
  modal: {
    paddingHorizontal: padding,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: "#0000006a",
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "SFProDisplay-Regular",
    color: "#0000009a",
  },
});

export default Index;
