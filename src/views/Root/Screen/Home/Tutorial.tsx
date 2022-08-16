//@ts-nocheck


import { HeaderRoot, Empty, Loading, LazyLoading } from "../../../../components";
import { Container, Content } from "native-base";
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView, TextInput } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
const TutorialScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  return (

    <Container>
      <HeaderRoot title="Tư vấn trực tuyến" previous={() => navigation.goBack()} />
      <ScrollView>

        <View style={{
          flexDirection: 'column', alignItems: "baseline", paddingHorizontal: 55, borderBottomWidth: 1,
          borderBottomColor: "#0000003a",

        }}>
          <Text style={{ color: "#FB8500", justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 16, paddingVertical: 20, fontFamily: "SFProDisplay-Regular" }}>Xin vui lòng điền thông tin vào trước để
            MR APP support bạn tốt hơn</Text>
          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="Họ và tên*"
              defaultValue={text}

            />

          </View>
          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="Email*"
              defaultValue={text}

            />

          </View>
          <View >
            <TextInput
              style={{
                height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="Số điện thoại*"
              defaultValue={text}

            />

          </View>
 
          <View style={{ backgroundColor: '#142977', height: 53, width: 110, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginBottom:20 }}>
            <Text style={{ color: 'white', fontSize: 16, fontFamily: 'SFProDisplay-Regular' }}>ĐĂNG KÝ</Text>
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

export default TutorialScreen;
