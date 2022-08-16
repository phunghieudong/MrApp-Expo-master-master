//@ts-nocheck

import React from "react";
import { HeaderRoot, Empty, Loading, LazyLoading } from "../../../../components";
import { Container, Content } from "native-base";
import { Dimensions, StyleSheet, View, Text, Image,ScrollView } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
const ContactScreen = ({ navigation }) => {
  return (

    <Container>
      <HeaderRoot title="Liên hệ" previous={() => navigation.goBack()} />
      <ScrollView>
        <View>
          <Image
            source={require("../../../../assets/images/map.png")}
            style={{ height: 183, width: "100%", marginRight: 8 }}
          />
        </View>
        <View style={{
          flexDirection: 'column', alignItems: "baseline", paddingHorizontal: 55, borderBottomWidth: 1,
          borderBottomColor: "#0000003a",

        }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Image
              source={require("../../../../assets/images/diachi.png")}
              style={{ height: 20, width: 17, }}
            />
            <View style={{ flexDirection: 'column', alignItems: "flex-start", padding: 20 }}>
              <Text style={{ color: "#666666", fontSize: 12, fontFamily: 'SFProDisplay-Regular' }}>ĐỊA CHỈ</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>1073/23 CMT8, phường 7, quận Tân
              </Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>Bình, TP.HCM</Text>

            </View>

          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Image
              source={require("../../../../assets/images/gmailblue.png")}
              style={{ height: 19, width: 20, }}
            />
            <View style={{ flexDirection: 'column', alignItems: "flex-start", padding: 20 }}>
              <Text style={{ color: "#666666", fontSize: 12, fontFamily: 'SFProDisplay-Regular' }}>EMAIL</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>info@gmail.com
              </Text>


            </View>

          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Image
              source={require("../../../../assets/images/phoneblue.png")}
              style={{ height: 20, width: 20, }}
            />
            <View style={{ flexDirection: 'column', alignItems: "flex-start", padding: 20 }}>
              <Text style={{ color: "#666666", fontSize: 12, fontFamily: 'SFProDisplay-Regular' }}>SỐ ĐIỆN THOẠI - FAX</Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>+84 902 345 678

              </Text>
              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>+84 902 345 678
              </Text>

            </View>

          </View>
        </View>
        <View style={{
          flexDirection: 'column', alignItems: "baseline", paddingHorizontal: 55, borderBottomWidth: 1,
          borderBottomColor: "#0000003a",

        }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>


            <View style={{ flexDirection: 'column', padding: 20 }}>

              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>Liên hệ tổng đài
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/zalo.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Zalo</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/face.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Facebook</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/ws.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Whatsapp</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/gmail.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Mail</Text>
                </View>
              </View>

            </View>

          </View>


        </View>

        <View style={{
          flexDirection: 'column', alignItems: "baseline", paddingHorizontal: 55, borderBottomWidth: 1,
          borderBottomColor: "#0000003a",

        }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>


            <View style={{ flexDirection: 'column', padding: 20 }}>

              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>Liên hệ kĩ thuật
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/zalo.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Zalo</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/face.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Facebook</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/ws.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Whatsapp</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../../assets/images/gmail.png")}
                    style={{ height: 40, width: 40, marginRight: 8 }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Mail</Text>
                </View>
              </View>

            </View>

          </View>


        </View>

      </ScrollView>
    </Container>
  );
};

export default ContactScreen;
