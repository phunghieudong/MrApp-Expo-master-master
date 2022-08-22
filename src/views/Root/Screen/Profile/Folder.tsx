//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, View, Text, Image, TouchableWithoutFeedback } from "react-native";

const { mainColorText, padding } = settings.styles;

const FolderScreen = () => {
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
    <Container>
      <HeaderRoot title="HÌNH ẢNH" hideAvatar={true} previous={true} filter={true} />
      <Content contentContainerStyle={styles.body}>
        <View style={{ height: 54, width: "100%", backgroundColor: '#F0F0F0' }}>
          <Text style={{ fontSize: 14, fontFamily: 'SFProDisplay-Bold', color: '#525252', paddingHorizontal: 30, justifyContent: 'center', paddingVertical: 18 }}>SIÊU ÂM</Text>
        </View>


        <View style={{ width: "100%", height: 280, paddingHorizontal: 40 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 30 }}>
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10 }}>
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
          </View>
        </View>
        <View style={styles.document}>
          <Image
            source={require("../../../../assets/images/blue1.png")}
            style={{ height: 17, width: 20, marginRight: 10 }}
          />
          <Text style={styles.documenttext}>ĐÍNH KÈM ẢNH TƯ LIỆU / HỒ SƠ</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', paddingHorizontal: 80, }}>


          <TouchableWithoutFeedback>
            <View style={styles.document}>
              <Image
                source={require("../../../../assets/images/blue2.png")}
                style={{ height: 25, width: 13 }}
              />
              <Text style={styles.documenttext}>TẢI XUỐNG</Text>
            </View>

          </TouchableWithoutFeedback>
          <View style={styles.document}>

            <Text style={{ color: "#D9D9D9", fontSize: 20 }}>|</Text>
          </View>
          <TouchableWithoutFeedback >
            <View style={styles.document}>
              <Image
                source={require("../../../../assets/images/blue3.png")}
                style={{ height: 20, width: 20 }}
              />
              <Text style={styles.documenttext}>SHARE</Text>
            </View>

          </TouchableWithoutFeedback>
        </View>

        <View style={{ height: 54, width: "100%", backgroundColor: '#F0F0F0' }}>
          <Text style={{ fontSize: 14, fontFamily: 'SFProDisplay-Bold', color: '#525252', paddingHorizontal: 30, justifyContent: 'center', paddingVertical: 18 }}>SIÊU ÂM</Text>
        </View>


        <View style={{ width: "100%", height: 280, paddingHorizontal: 40 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 30 }}>
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10 }}>
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
            <Image
              source={require("../../../../assets/images/LKSTvuong.png")}
              style={{ height: 102, width: 102, }}
            />
          </View>
        </View>
        <View style={styles.document}>
          <Image
            source={require("../../../../assets/images/blue1.png")}
            style={{ height: 17, width: 20, marginRight: 10 }}
          />
          <Text style={styles.documenttext}>ĐÍNH KÈM ẢNH TƯ LIỆU / HỒ SƠ</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', paddingHorizontal: 80, }}>


          <TouchableWithoutFeedback>
            <View style={styles.document}>
              <Image
                source={require("../../../../assets/images/blue2.png")}
                style={{ height: 25, width: 13 }}
              />
              <Text style={styles.documenttext}>TẢI XUỐNG</Text>
            </View>

          </TouchableWithoutFeedback>
          <View style={styles.document}>

            <Text style={{ color: "#D9D9D9", fontSize: 20 }}>|</Text>
          </View>
          <TouchableWithoutFeedback >
            <View style={styles.document}>
              <Image
                source={require("../../../../assets/images/blue3.png")}
                style={{ height: 20, width: 20 }}
              />
              <Text style={styles.documenttext}>SHARE</Text>
            </View>

          </TouchableWithoutFeedback>
        </View>

        <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', paddingHorizontal: 120, paddingTop: 30 }}>
          <View>
            <Image
              source={require("../../../../assets/images/tri.png")}
              style={{ height: 6, width: 18 }}
            />
          </View>
          <View style={{ backgroundColor: '#142977', height: 44, width: 44, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>01</Text>
          </View>

          <View style={{ backgroundColor: '#fff', height: 44, width: 44, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>02</Text>
          </View>
          <View style={{ backgroundColor: '#fff', height: 44, width: 44, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>03</Text>
          </View>
          <View>
            <Image
              source={require("../../../../assets/images/phai.png")}
              style={{ height: 6, width: 18 }}
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

  },
  document: {
    paddingHorizontal: padding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    marginTop: 5,
    marginBottom: 5,

  },
  documenttext: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    letterSpacing: 1.5,
    fontFamily: "SFProDisplay-Regular",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: mainColorText,
    marginTop: 20,
    fontFamily: "SFProDisplay-Regular",
  },
});

export default FolderScreen;
