//@ts-nocheck
import React, { FC, useEffect, useRef, useState } from "react";
import { View, Text, Container, Input, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading, Loading } from "@/components";
import { StyleSheet, Dimensions, FlatList, Image, TextInput } from "react-native";
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
        title="MÃ HỒ SƠ B. VIỆN"
        previous={() => navigation.goBack()}
      />
      <View style={{justifyContent:'center' , alignItems:'center'}}>
        <TextInput
          style={{
            height: 40, width: 315, borderRadius: 6, borderWidth: 0.5, height: 40,
            margin: 12,
            borderWidth: 1,
            borderColor:'#D8D6D2',
            padding: 10,
            justifyContent:'center',
            backgroundColor:'#F0F0F0',
          
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

            <View style={styles.block}>

              <View>

                <Image
                  source={require("../../../../assets/images/LKSTvuong.png")}
                  style={{ height: 87, width: 87 }}
                />
              </View>
              <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                <Text numberOfLines={2} style={{ fontSize: 18, fontFamily: 'SFProDisplay-Bold' }}> {item.HospitalName}</Text>
                <Text style={{ color: "#FB8500", fontSize: 14 }}> Mã hồ sơ: {item.Code}</Text>
                <Text style={{ color: "#142977", fontSize: 14 }}> Ngày cấp {item.ConfigTimeValue}</Text>
                <View style={{
                  fontSize: 14,
                  fontFamily: "Regular",
                  lineHeight: 18,
                  borderBottomWidth: 1,
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  paddingVertical: 5,
                }}></View>
              </View>

            </View>

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
    paddingHorizontal: padding,
  },
  block: {

    borderRadius: 16,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'

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
