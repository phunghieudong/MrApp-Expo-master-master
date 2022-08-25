//@ts-nocheck

import { getSpeciallistType } from "@/api/Catalogue";
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

const DepartmentScreen = (props: HospitalPickerProps) => {
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
      const res = await getSpeciallistType();
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
      <HeaderRoot title="CHỌN CHUYÊN KHOA" filter={true} previous={() => navigation.goBack()} />
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
                <View style={{justifyContent:'center', alignItems:'center' , backgroundColor:'#E8F5F8' , borderRadius:100, height:48 , width:48}}>
                  <Image
                    source={require("../../../../assets/images/lungs.png")}
                    style={{ height: 40, width: 40 , borderRadius:100 }}
                  />
                </View>
                <View style={{ flexDirection: 'column' }}>


                  <View style={{ width: 280 }}>

                    <Text style={styles.headingtext} numberOfLines={2}>Khoa {item.Name}</Text>
                    <Text style={{color:"#FB8500" , fontSize:14,  paddingLeft: 10,}} numberOfLines={2}>{item.Price}đ</Text>
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
    backgroundColor: "rgb(216, 227, 232)",
 
  },
  body: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  box: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderRadius: 12,
    // padding: 15,
    justifyContent:'center', 
    alignItems:'center',
    marginTop: 10,
    flexDirection: 'row',
    width: 343,
    height: 64,

  },

  headingicon: {
    color: blueColor,
    fontSize: 18,
    marginRight: 4,
  },
  headingtext: {
    color: "#000000",
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 14,
    paddingLeft: 10,



  },
  detail: {
    marginTop: 6,
    paddingLeft: 10
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

export default DepartmentScreen;
