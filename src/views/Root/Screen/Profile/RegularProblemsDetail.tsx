//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Content, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { InteractionManager, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const { mainColor, mainColorText, padding } = settings.styles;

const RegularProblemsDetailScreen = ({ navigation }) => {
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
      <HeaderRoot title="FAQ" filter={true} previous={() => navigation.goBack()} />
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
                  Tiêu đề 1
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
              <Text style={styles.step}>Bước 1:</Text>

              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </Text>
              <Text style={styles.text}>
                At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna
              </Text>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                <Image
                  source={require("../../../../assets/images/FAQ.png")}
                  style={{ height: 163, width: 370 , borderRadius:6 }}
                />
              </View>
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
                borderWidth:0.5,
                borderColor:'#fff'
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
                  Tiêu đề 2
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
              <Text style={styles.step}>Bước 2:</Text>

              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </Text>
              <Text style={styles.text}>
                At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna
              </Text>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                <Image
                  source={require("../../../../assets/images/FAQ.png")}
                  style={{ height: 163, width: 370 , borderRadius:6 }}
                />
              </View>
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
                  Tiêu đề 3
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
              <Text style={styles.step}>Bước 3:</Text>

              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </Text>
              <Text style={styles.text}>
                At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna
              </Text>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                <Image
                  source={require("../../../../assets/images/FAQ.png")}
                  style={{ height: 163, width: 370 , borderRadius:6 }}
                />
              </View>
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
    paddingHorizontal: 20
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

export default RegularProblemsDetailScreen;


