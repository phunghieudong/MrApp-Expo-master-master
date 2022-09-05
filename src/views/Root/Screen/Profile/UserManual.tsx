
//@ts-nocheck
import React, { FC, useEffect, useState } from "react";
import { View, Text, Container, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading } from "@/components";
import { getUserManual } from "@/api/UserManual";

import { UserManualProps } from "@/navigation/types/RootStack";
import { UserManualData } from "@/types/UserManual";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { settings } from "@/config";

const { padding, mainColorText, successColor } = settings.styles;
import { _format } from "@/utils";
const UserManualScreen: FC<UserManualProps> = ({ navigation }) => {
  const [data, setData] = useState<string>("");
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);
// chổ này là choorr này , chính xác là chổ này 
  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const params = { pageIndex: current, pageSize: 10 };
          const res = await getUserManual(params);
          if (res.ResultCode == 200) {
            setData(res.Data)
          }
          if (!ready) setReady(true);
        }
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [page.current]);

  return (
    <Container style={styles.container}>
      <HeaderRoot title="Hướng dẫn sử dụng" previous={() => navigation.goBack()} />
      {!ready && <LazyLoading />}
      {ready && (
        <View style={{justifyContent:'center' , alignItems:'center'}}>
          {/* <Text>{data.UserManualContent}</Text> */}
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <Text style={{ color: '#000000', fontSize: 20, fontFamily: "SFProDisplay-Bold", }}>HƯỚNG DẪN SỬ DỤNG MR APP</Text>
          </View>
          <View style={{ marginTop:20,width:"90%",backgroundColor: '#ffffff', borderRadius: 12 , paddingTop:10 , paddingHorizontal:20 , justifyContent:'center', alignItems:'center' , paddingVertical:20}}>
            <Text>{data.UserManualContent}</Text>
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F5F8",
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
    backgroundColor: "#E8F5F8",
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

export default UserManualScreen;
