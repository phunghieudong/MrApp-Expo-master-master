
//@ts-nocheck
import { getHospitals } from "@/api/Catalogue";
import { HeaderRoot, Empty, Loading, LazyLoading } from "@/components";
import { settings } from "@/config";
import { HospitalPickerProps } from "@/navigation/types/Home";
import { HospitalData } from "@/types/base";
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

const HospitalPickerScreen = (props: HospitalPickerProps) => {
  const {
    navigation,
    route: {
      params: { typeId, hospitalId },
    },
  } = props;

  const nav = (
    hospitalId: number,
    hospitalName: string,
    hospitalAddress: string,
    hospitalWebsite: string,
    hospitalPhoneNumber: string
  ) => {
    navigation.navigate(typeId === 1 ? "SpecialSchedule" : "NormalSchedule", {
      hospitalId,
      hospitalName,
      hospitalAddress,
      hospitalWebsite,
      hospitalPhoneNumber,
    });
  };

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
      <HeaderRoot title="Chọn bệnh viện" previous={() => navigation.goBack()} />
      {!ready && <LazyLoading />}
      {ready && hospitals.length > 0 && (
        <FlatList
          data={hospitals}
          ListFooterComponent={<View style={{ height: 10 }} />}
          keyExtractor={(item) => item.Id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                nav(
                  item.Id,
                  item.Name,
                  item.Address,
                  item.WebSiteUrl,
                  item.Phone
                )
              }
            >
              <View style={styles.box}>

                <View>
                  <Text style={{ color: '#000000', fontSize: 20, fontFamily: "SFProDisplay-Bold", paddingLeft: 30, paddingTop: 30 }}>{item.Name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', }}>
                  <View>
                    <Image
                      source={require("../../../../assets/images/diachi.png")}
                      style={{ height: 20, width: 16.81, marginRight: 20, marginLeft: 30 }}
                    />
                  </View>
                  <View style={{ flexDirection: 'column', paddingTop: 8 }}>
                    <Text style={{ color: '#666666', fontSize: 12, }}>ĐỊA CHỈ</Text>
                    <Text style={{ fontSize: 16 }}>{item.Address}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', }}>
                  <View>
                    <Image
                      source={require("../../../../assets/images/gmailblue.png")}
                      style={{ height: 18.33, width: 20, marginRight: 20, marginLeft: 30 }}
                    />
                  </View>
                  <View style={{ flexDirection: 'column', paddingTop: 8 }}>
                    <Text style={{ color: '#666666', fontSize: 12, }}>EMAIL</Text>
                    <Text style={{ fontSize: 16 }}>{item.Email}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', }}>
                  <View>
                    <Image
                      source={require("../../../../assets/images/phoneblue.png")}
                      style={{ height: 20, width: 20, marginRight: 20, marginLeft: 30 }}
                    />
                  </View>
                  <View style={{ flexDirection: 'column', paddingTop: 8 }}>
                    <Text style={{ color: '#666666', fontSize: 12, }}>SỐ ĐIỆN THOẠI-FAX</Text>
                    <Text style={{ fontSize: 16 }}>{item.Phone}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingBottom:30 }}>
                  <View>
                    <Image
                      source={require("../../../../assets/images/word.png")}
                      style={{ height: 20, width: 20, marginRight: 20, marginLeft: 30 }}
                    />
                  </View>
                  <View style={{ flexDirection: 'column', paddingTop: 8 }}>
                    <Text style={{ color: '#666666', fontSize: 12, }}>WEBSITE</Text>
                    <Text style={{ fontSize: 16 }}>{item.WebSiteUrl}</Text>
                  </View>
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
    flex: 1,
    backgroundColor: "#ffffff",
  },
  body: {
    flexGrow: 1,
  },
  box: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor:'#CACEE1',
    flexDirection: "column",

  },

  headingicon: {
    color: blueColor,
    fontSize: 18,
    marginRight: 4,
  },
  headingtext: {
    color: "#000000",
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 20,
    paddingLeft: 10,



  },
  detail: {
    marginTop: 6,
    paddingLeft: 10,

    width: "80%"
  },
  label: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: "SFProDisplay-Regular",
    color: "rgba(0, 0, 0, .5)",
    letterSpacing: 1.25,
  },
  value: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: "SFProDisplay-Regular",
    color: "#919191",
  },
  icon: {
    width: 24,
    color: mainColor,
    fontSize: 16,
  },
  click: {
    position: "absolute",
    right: 7.5,
    top: 7.5,
  },
  clickcircle: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: blueColor,
    elevation: 4,
    borderRadius: 100,
  },
  clickplus: {
    fontSize: 20,
    color: "#fff",
  },
  clickchecked: {
    fontSize: 34,
    color: blueColor,
  },
  chkbox: {
    left: 0,
    borderRadius: 100,
    paddingBottom: 0,
  },
});

export default HospitalPickerScreen;
