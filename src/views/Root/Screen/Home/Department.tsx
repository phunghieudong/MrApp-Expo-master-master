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
                  <Image
                    source={require("../../../../assets/images/LKSTvuong.png")}
                    style={{ height: 87, width: 87 }}
                  />
                </View>
                <View style={{flexDirection:'column'}}>


                  <View style={{ width:280}}>
                    {/* <Icon
                      type="Feather"
                      name="bookmark"
                      style={styles.headingicon}
                    /> */}
                    <Text style={styles.headingtext} numberOfLines={2}>{item.Name}</Text>
                  </View>
                  <View style={styles.detail}>
                    <Text style={styles.value}>{item.Address}</Text>
                  </View>
                </View>

                {/* <View style={styles.detail}>
                  <Text style={styles.label}>WEBSITE</Text>
                  <Text style={styles.value}>{item.WebSiteUrl}</Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.label}>ĐIỆN THOẠI</Text>
                  <Text style={[styles.value, { color: orangeColor }]}>
                    {item.Phone}
                  </Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.label}>EMAIL</Text>
                  <Text style={styles.value}>{item.Email}</Text>
                </View>
                <View style={styles.click}>
                  {hospitalId !== item.Id && (
                    <View style={styles.clickcircle}>
                      <Icon
                        type="MaterialCommunityIcons"
                        name="plus"
                        style={styles.clickplus}
                      />
                    </View>
                  )}
                  {hospitalId === item.Id && (
                    <Icon
                      type="Feather"
                      name="check-circle"
                      style={styles.clickchecked}
                    />
                  )}
                </View> */}
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
    backgroundColor: "rgb(216, 227, 232)",
  },
  body: {
    flexGrow: 1,
  },
  box: {
    backgroundColor: "#fff",
    marginHorizontal: padding,
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',

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
    paddingLeft:10,

   
  
  },
  detail: {
    marginTop: 6,
    paddingLeft:10
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
