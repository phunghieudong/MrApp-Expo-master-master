//@ts-nocheck
import { HeaderRoot } from "@/components";
import { settings } from "@/config";
import { NewsDetailProps } from "@/navigation/types/profile";
import { Container, Content } from "native-base";
import React, { FC } from "react";
import { Dimensions, StyleSheet, View, Text, Image } from "react-native";
import Imaged from "react-native-scalable-image";
import { _format } from "@/utils";
import { TouchableOpacity } from "react-native-gesture-handler";
const { hostURL } = settings;
const { padding, mainColorText } = settings.styles;
const { width: dW } = Dimensions.get("window");

const NewsDetail: FC<NewsDetailProps> = ({
  navigation,
  route: {
    params: { backgroundImage, content, title, CreatedBy, Created },
  },
}) => {
  return (
    <Container>
      <HeaderRoot title="tin tức" previous={() => navigation.goBack()} />
      {/* {bannerImage && (
        <Imaged width={dW} source={{ uri: hostURL + "/" + bannerImage }} />
      )} */}
      <Content contentContainerStyle={styles.body}>

        <View style={{
          backgroundColor: "#fff",
          borderRadius: 4,
          padding: 14,
          marginTop: 5,
          flexDirection: "column",
        }}>
          {backgroundImage && (
            <Image
              source={{ uri: hostURL + "/" + backgroundImage }}
              style={{ height: 150, width: "100%", borderRadius: 6, marginTop: 30 }}
            />
          )}


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", paddingVertical: 5 }}>
            <Image
              source={require("../../../../assets/images/newcalender.png")}
              style={{ height: 15, width: 15, marginRight: 8 }}
            />
            <Text style={{ color: "#666666", marginRight: 8 }}>25/07/21</Text>
            <Image
              source={require("../../../../assets/images/line.png")}
              style={{ height: 17, width: 1, marginRight: 8 }}
            />
            <Image
              source={require("../../../../assets/images/usernews.png")}
              style={{ height: 15, width: 15 }}
            />
            <Text style={{ color: "#666666" }}>admin</Text>
          </View>
        </View>

 

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>

        <View style={{
          backgroundColor: "#fff",
          borderRadius: 4,
          padding: 14,
          marginTop: 5,
          flexDirection: "column",
        }}>
          {backgroundImage && (
            <Image
              source={{ uri: hostURL + "/" + backgroundImage }}
              style={{ height: 150, width: "100%", borderRadius: 6 }}
            />
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={{ flexDirection: 'row', justifyContent: "flex-end", alignItems: 'center' }}>
          <Text style={{ color: "#666666" }}>Share</Text>
          <View style={{ paddingHorizontal: 15, flexDirection: 'row' }} >

            <Image
              source={require("../../../../assets/images/zalo.png")}
              style={{ height: 14, width: 14, }}
            />



            <Image
              source={require("../../../../assets/images/face.png")}
              style={{ height: 14, width: 14, marginLeft: 5 }}
            />



            <Image
              source={require("../../../../assets/images/gg.png")}
              style={{ height: 14, width: 14, marginLeft: 5 }}
            />


            <Image
              source={require("../../../../assets/images/gmail.png")}
              style={{ height: 14, width: 14, marginLeft: 5 }}
            />


          </View>


        </View>

      </Content>

    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(216, 227, 232)",
  },
  body: {
    flexGrow: 1,

  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 14,
    marginTop: 5,
    flexDirection: "column",

  },
  detail: {
    flex: 1,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(0, 0, 0, .5)",
    marginHorizontal: padding,
    fontFamily: "SFProDisplay-Regular",
    borderBottomWidth: 1,
    borderBottomColor: "#0000003a",
    paddingVertical: 20,
  },
  title: {
    marginHorizontal: padding,
    marginVertical: 10,
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "SFProDisplay-Medium",
    color: mainColorText,
  },
  img: {
    width: 200,
    minHeight: 90,
  },
  // content: {
  //   marginHorizontal: padding,
  //   marginVertical: 10,
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontFamily: "SFProDisplay-Regular",
  //   color: "rgba(0, 0, 0, .5)",
  // },
});

export default NewsDetail;
