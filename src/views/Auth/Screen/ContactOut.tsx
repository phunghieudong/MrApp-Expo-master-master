//@ts-nocheck

import React from "react";
import { HeaderRoot, Empty, Loading, LazyLoading } from "../../../components";
import { Container, Content } from "native-base";
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from "react-native";
// nhun cai map vao 
import Webview from "react-native-webview";

 const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2660681269867!2d106.65395381431712!3d10.790922361877834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng%20ty%20TNHH%20-%20MONA%20MEDIA!5e0!3m2!1svi!2s!4v1660727364553!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

const ContactOutScreen = ({ navigation }) => {
  return (

    <Container>
      <HeaderRoot title="Liên hệ" previous={() => navigation.goBack()} />
      <ScrollView>
        <View style={{height:183 , width:"100%" ,  }}>
          <Webview source={{ html: map }} style={{height:183 , width:"158%" , }}/>
          {/* <Image
            source={require("../../../../assets/images/map.png")}
            style={{ height: 183, width: "100%", marginRight: 8 }}
          /> */}
        </View>
        <View style={{
          flexDirection: 'column', alignItems: "baseline", paddingHorizontal: 55, borderBottomWidth: 1,
          borderBottomColor: "#0000003a",

        }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Image
              source={require("../../../assets/images/diachi.png")}
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
              source={require("../../../assets/images/gmailblue.png")}
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
              source={require("../../../assets/images/phoneblue.png")}
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
          <View style={{ justifyContent: "space-around", flexDirection: 'row', alignItems: 'center', width: "100%" }}>


            <View style={{ flexDirection: 'column', padding: 20 }}>

              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>Liên hệ tổng đài
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../assets/images/zalo.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Zalo</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../assets/images/face.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Facebook</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../assets/images/ws.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Whatsapp</Text>
                </View>
                <View style={{ justifyContent: "space-around", alignItems: 'center', }}>
                  <Image
                    source={require("../../../assets/images/gmail.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191', }}>Mail</Text>
                </View>
              </View>

            </View>

          </View>


        </View>

        <View style={{
          flexDirection: 'column', alignItems: "baseline", paddingHorizontal: 55, borderBottomWidth: 1,
          borderBottomColor: "#0000003a",

        }}>
          <View style={{ justifyContent: "space-around", flexDirection: 'row', alignItems: 'center', width: "100%" }}>


            <View style={{ flexDirection: 'column', padding: 20 }}>

              <Text style={{ color: "#000000", fontSize: 18, fontFamily: 'SFProDisplay-Regular' }}>Liên hệ kĩ thuật
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../assets/images/zalo.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Zalo</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../assets/images/face.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Facebook</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require("../../../assets/images/ws.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191' }}>Whatsapp</Text>
                </View>
                <View style={{ justifyContent: "space-around", alignItems: 'center', }}>
                  <Image
                    source={require("../../../assets/images/gmail.png")}
                    style={{ height: 40, width: 40, }}
                  />
                  <Text style={{ paddingTop: 10, fontSize: 14, color: '#919191', }}>Mail</Text>
                </View>
              </View>

            </View>

          </View>


        </View>
      </ScrollView>
    </Container>
  );
};

export default ContactOutScreen;
