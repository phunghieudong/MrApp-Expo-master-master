
//@ts-nocheck
import { getHospitals } from "@/api/Catalogue";
import { HospitalPickerProps } from "@/navigation/types/Home";
import { HospitalData } from "@/types/base";
import { HeaderRoot, Empty, Loading, LazyLoading } from "@/components";
import { settings } from "@/config";

import { Container, Icon, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  InteractionManager,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";

const { mainColor, mainColorText, padding, blueColor, orangeColor } =
  settings.styles;


const PrivacyPolicyScreen: FC<HospitalPickerProps> = ({ navigation }) => {

  // data
  const [hospitals, setHospitals] = useState<Array<HospitalData>>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getHospitals();
      setHospitals([...res.Data]);
      setLoad(false);
    })();
  }, []);

  // interaction
  const [ready, setReady] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (!load) {
        setReady(true);
      }
    });
  }, [load]);

  return (
    <Container style={styles.container}>
      <HeaderRoot title="Chính sách" previous={() => navigation.goBack()} />
      {!ready && <LazyLoading />}
      {ready && hospitals.length > 0 && (
        <FlatList
          data={hospitals}
          style={styles.body}
          ListFooterComponent={<View style={{ height: 10 }} />}
          keyExtractor={(item) => item.Id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("PrivacyPolicyDetail")}

            >
              <View style={{
                flexDirection: "row",
                paddingVertical: 20,
                borderTopWidth: 0.5,
                borderColor: '#CACEE1'
              }}>

                <View style={styles.left}>
                  <View style={{ height: 87, width: 87 }}>
                    <Image
                      source={require("../../../../assets/images/LKSTvuong.png")}
                      style={{ height: 87, width: 87 }}
                    />
                  </View>
                </View>
                <View style={styles.right}>

                  <Text style={styles.hospital}>{item.Name}</Text>




                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      )}
      {ready && !hospitals.length && (
        <Empty text="Không tìm thấy bất kỳ bệnh viện nào" />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  body: {
    paddingHorizontal: padding,
  },

  logo: {

    borderRadius: 100,
    width: 34,
    height: 34,
    marginRight: 8,
    marginTop: 4,
  },
  logotext: {
    textAlign: "center",
    lineHeight: 34,
    color: "#fff",
    fontSize: 14,
    fontFamily: "SFProDisplay-Regular",
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
    fontFamily: "SFProDisplay-Regular",
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "SFProDisplay-Regular",

  },
  img: {
    width: 40,
  },

  icon: {
    fontSize: 18,
    padding: 8,
    left: 8,

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
    // fontFamily: "SFProDisplay-Bold",
    letterSpacing: 2,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "flex-start",

  },
  date: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",

  },
  paid: {
    fontSize: 14,
    lineHeight: 19,
    // fontFamily: "SFProDisplay-Bold",
    color: "#142977",
  },
  hospital: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    // fontFamily: "SFProDisplay-Semibold",

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
  },
  btn: {
    marginRight: 12,

    minWidth: 100,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 100,
  },
  btntext: {

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

export default PrivacyPolicyScreen;
