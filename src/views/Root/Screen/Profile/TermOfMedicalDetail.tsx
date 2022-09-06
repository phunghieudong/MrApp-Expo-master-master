
//@ts-nocheck
import React, { FC, useEffect, useState } from "react";
import { View, Text, Container, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading } from "@/components";
import { getTermOfMedical } from "@/api/TermOfMedical";

import { TermOfMedicalProps } from "@/navigation/types/RootStack";
import { TermOfMedicalData } from "@/types/TermOfMedical";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { settings } from "@/config";

const { padding, mainColorText, successColor } = settings.styles;
import { _format } from "@/utils";
import { Item } from 'native-base';
import { useRoute } from "@react-navigation/native";


const TermOfMedicalDetailScreen: FC<TermOfMedicalProps> = ({ navigation }) => {
  const [data, setData] = useState<TermOfMedicalData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);
  // chổ này là choorr này , chính xác là chổ này 
  const route = useRoute(); // cái params
  console.log("route ", route);
  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const params = { pageIndex: current, pageSize: 10, HospitalId: route.params.HospitalId }; // cái params
          const res = await getTermOfMedical(params);
          if (res.ResultCode == 200) {
            setData(res.Data.Items)
          }
          if (!ready) setReady(true);
        }
      } catch (error) {
        throw new Error(error);
      }
    })
      // tao cai fleasst
      ();
  }, [page.current]);
  console.log('dataDong', data)
  return (
    <Container style={styles.container}>
      <HeaderRoot title="Quy trình khám bệnh" previous={() => navigation.goBack()} />

      {!ready && <LazyLoading />}
      {ready && !data.length && (
        <Empty text="Không tìm thấy bất quy trình nào" />
      )}
      {ready && (
        // <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        //   <Text>{data.Title}</Text>

        //   <View style={{ marginTop: 20, width: "90%", backgroundColor: '#ffffff', borderRadius: 12, paddingTop: 10, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>

        //   </View>
        // </View>
        <FlatList
          data={data}
          style={styles.body}
          keyExtractor={(i) => i.Id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback

            >
              <View style={styles.box}>

                <Text style={{ fontSize: 20, fontFamily: "SFProDisplay-Bold", }}>
                  {item.ProcessTitle}
                </Text>

                <Text style={{ color: "#666666", fontSize: 14 }}>
                  {item.ProcessContent}
                </Text>


              </View>
            </TouchableWithoutFeedback>
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

  logo: {
    backgroundColor: successColor,
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
    color: mainColorText,
  },
  img: {
    width: 40,
  },

  icon: {
    fontSize: 18,
    padding: 8,
    left: 8,

  },
});

export default TermOfMedicalDetailScreen;



