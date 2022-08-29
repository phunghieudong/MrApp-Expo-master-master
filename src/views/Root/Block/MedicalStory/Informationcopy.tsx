//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const { mainColor, mainColorText, padding } = settings.styles;

const Dong = ({ navigation }) => {
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

      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <View
              style={{
                backgroundColor: "#219EBC",
                height: 65,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 24,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "SFProDisplay-Bold",
                    color: "#fff",
                  }}
                >
                  PHÒNG LAO
                </Text>
              </View>
              <View>

                <Image
                  source={require("../../../../assets/images/upfff.png")}
                  style={{ height: 4.78, width: 9.33 }}
                />

              </View>
            </View>
          </TouchableOpacity>
          {shouldShow ? (
            <View style={styles.box}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Mũi 1
                </Text>
                <Text style={styles.text}>
                  Đã tiêm: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Mũi 2
                </Text>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#FB8500', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Chưa tiêm: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#219EBC', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Mũi 3
                </Text>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#219EBC', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Đăng ký: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Bệnh viện
                </Text>
                <Text style={styles.text}>
                  Bệnh viện Phạm Ngọc Thạch
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Nơi tiêm
                </Text>
                <Text style={styles.text}>
                  Quận 10 , TP HCM
                </Text>
              </View>
              <Text style={{ color: '#FB8500', fontSize: 16, justifyContent: 'center', alignContent: 'center', paddingTop: 15 }}>*Lưu ý: Đối với vaccine này chỉ có thể tiêm
                trong vòng từ 3 - 5 tuần / lần</Text>
            </View>

          ) : null}

        </View>
        <View>
          <TouchableOpacity onPress={() => setShouldShow1(!shouldShow1)}>
            <View
              style={{
                backgroundColor: "#219EBC",
                height: 65,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 24,
                borderWidth: 0.5,
                borderColor: '#fff'
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "SFProDisplay-Bold",
                    color: "#fff",
                  }}
                >
                  PHÒNG LAO
                </Text>
              </View>
              <View>

                <Image
                  source={require("../../../../assets/images/upfff.png")}
                  style={{ height: 4.78, width: 9.33 }}
                />

              </View>
            </View>
          </TouchableOpacity>
          {shouldShow1 ? (
            <View style={styles.box}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Mũi 1
                </Text>
                <Text style={styles.text}>
                  Đã tiêm: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Mũi 2
                </Text>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#FB8500', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Chưa tiêm: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#219EBC', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Mũi 3
                </Text>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#219EBC', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Đăng ký: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Bệnh viện
                </Text>
                <Text style={styles.text}>
                  Bệnh viện Phạm Ngọc Thạch
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Nơi tiêm
                </Text>
                <Text style={styles.text}>
                  Quận 10 , TP HCM
                </Text>
              </View>
              <Text style={{ color: '#FB8500', fontSize: 16, justifyContent: 'center', alignContent: 'center', paddingTop: 15 }}>*Lưu ý: Đối với vaccine này chỉ có thể tiêm
                trong vòng từ 3 - 5 tuần / lần</Text>
            </View>
          ) : null}

        </View>
        <View>
          <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)}>
            <View
              style={{
                backgroundColor: "#219EBC",
                height: 65,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 24,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "SFProDisplay-Bold",
                    color: "#fff",
                  }}
                >
                  PHÒNG LAO
                </Text>
              </View>
              <View>

                <Image
                  source={require("../../../../assets/images/upfff.png")}
                  style={{ height: 4.78, width: 9.33 }}
                />

              </View>
            </View>
          </TouchableOpacity>
          {shouldShow2 ? (
            <View style={styles.box}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Mũi 1
                </Text>
                <Text style={styles.text}>
                  Đã tiêm: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Mũi 2
                </Text>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#FB8500', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Chưa tiêm: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#219EBC', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Mũi 3
                </Text>
                <Text style={{
                  fontFamily: "SFProDisplay-Regular", color: '#219EBC', fontSize: 16, lineHeight: 24,
                  letterSpacing: 0.5,

                  marginTop: 15,
                }}>
                  Đăng ký: 15/11/2021
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Bệnh viện
                </Text>
                <Text style={styles.text}>
                  Bệnh viện Phạm Ngọc Thạch
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>
                  Nơi tiêm
                </Text>
                <Text style={styles.text}>
                  Quận 10 , TP HCM
                </Text>
              </View>
              <Text style={{ color: '#FB8500', fontSize: 16, justifyContent: 'center', alignContent: 'center', paddingTop: 15 }}>*Lưu ý: Đối với vaccine này chỉ có thể tiêm
                trong vòng từ 3 - 5 tuần / lần</Text>
            </View>
          ) : null}

        </View>
      </ScrollView>
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
    paddingHorizontal: 20,
    flexDirection: "column",


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
    color: "#666666",
    marginTop: 15,
    fontFamily: "SFProDisplay-Regular",

  },
});

export default Dong;


