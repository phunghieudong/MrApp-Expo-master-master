//@ts-nocheck
import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, Container, Input, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading, Loading } from "@/components";
import { StyleSheet, Dimensions, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { settings } from "@/config";
import { HospitalData } from "@/types/base";
import { _format } from "@/utils";
import { HospitalCodeProps } from "@/navigation/types/profile";
import { getAllMedicalRecord } from "@/api/MedicalRecordDetail";
import { DiagnosticData } from "@/types/MedicalRecordDetail";
import { useAppSelector } from "@/store/hook";
import { UserData } from "@/types/User";

const { padding, mainColorText, blueColor } = settings.styles;

const HospitalCodeScreen: FC<HospitalCodeProps> = ({ navigation }) => {


  const [shouldShow, setShouldShow] = useState(false);
  // lấy user hiện tại
  const user = useAppSelector((state) => state.user.current) as UserData;
  const [text, setText] = useState('');
  // get hospital data
  const [data, setData] = useState<DiagnosticData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { current, next } = page;
      if (next) {
        try {
          const res = await getAllMedicalRecord(
            user.UserId,
            user.Id,
            current,
            20
          );
          setData([...data, ...res.Data.Items]);
          if (current >= res.Data.TotalPage) {
            setPage({ ...page, next: false });
          }
          if (!ready) setReady(true);
        } catch (error) {
          throw new Error("FETCH ALL MEDICAL RECORD IS FAILED !!!");
        }
      }
    })();
  }, [page.current]);

  return (
    <Container style={styles.container}>

      <HeaderRoot
        title="DS MÃ HỒ SƠ BỆNH VIỆN"
        previous={() => navigation.goBack()}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{
            height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
            margin: 12,
            borderWidth: 1,
            borderColor: '#D8D6D2',
            padding: 10,
            justifyContent: 'center',
            backgroundColor: '#F0F0F0',

          }}
          placeholder="Nhập tên bệnh viện"
          defaultValue={text}

        />

      </View>
      {!ready && <LazyLoading />}
      {ready && !data.length && (
        <Empty text="Không tìm thấy bất kỳ hồ sơ bệnh viện nào" />
      )}
      {ready && data.length > 0 && (

        <FlatList
          data={data}
          style={styles.body}
          keyExtractor={(i) => i.Id.toString()}
          renderItem={({ item }) => (
            <ScrollView>
              <View>
                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                  <View style={styles.block}>

                    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                      <View >

                        <Image
                          source={require("../../../../assets/images/LKSTvuong.png")}
                          style={{ height: 87, width: 87 }}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', paddingLeft: 10, width: 250 }}>
                      <Text numberOfLines={2} style={{ fontSize: 18, fontFamily: 'SFProDisplay-Bold', width: "100%", }}> {item.HospitalName}</Text>
                      <Text style={{ color: "#FB8500", fontSize: 14 }}> Mã hồ sơ: {item.Code}</Text>


                      <Text style={{ color: "#142977", fontSize: 14 }}> Ngày cấp {_format.getShortVNDate(item.Created)}</Text>
                      <View style={{
                        fontSize: 14,
                        fontFamily: "Regular",
                        lineHeight: 18,

                        width: "100%",
                        paddingVertical: 5,
                      }}>

                      </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                      <Image
                        source={require("../../../../assets/images/upblue.png")}
                        style={{ height: 9, width: 14 }}
                      />
                    </View>


                  </View>
                </TouchableOpacity>
                {shouldShow ? (
                  <View style={{ paddingHorizontal: 30 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30, paddingBottom: 8 }}>
                      <Image
                        source={require("../../../../assets/images/codengang.png")}
                        style={{ height: 52, width: 269, }}
                      />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: "#FB8500", fontSize: 14 }}>1234567890123456</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.text}>
                        Mã cấp lần 1
                      </Text>
                      <Text style={styles.text}>
                        TD 0908
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.text}>
                        Ngày cấp
                      </Text>
                      <Text style={styles.text}>
                       11/2/2022
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.text}>
                        Mã cấp lần 2
                      </Text>
                      <Text style={styles.text}>
                        TD 0908
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.text}>
                        Ngày cấp
                      </Text>
                      <Text style={styles.text}>
                       12/4/2022
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.text}>
                        Website
                      </Text>
                      <Text style={styles.text}>
                        www.benhvienhoahao.vn
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom:30 }}>
                      <Text style={{color:'#000000' , fontFamily:"SFProDisplay-Bold"}}>
                       Địa chỉ
                      </Text>
                      <Text style={{color:'#000000' , fontFamily:"SFProDisplay-Bold"}}>
                      342 Sư Vạn Hạnh, Phường 14 quận 1
                      </Text>
                    </View>



                  </View>
                ) : null}

              </View>

            </ScrollView>


          )}
        />
      )}
    </Container>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  body: {

  },

  text: {
    color: '#525252'
  },
  block: {

    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5F8',
    width: "150%",
    height: 137,
    borderBottomWidth: 0.5,
    borderColor: '#CACEE1',
    borderWidth: 0.5,



  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: "rgba(0, 0, 0, .7)",
  },
  value: {
    flex: 1,
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "SFProDisplay-Regular",
    color: mainColorText,
    marginLeft: 4,
    textAlign: "right",
  },
});

export default HospitalCodeScreen;
