// Chổ này đang xài api của phần News -> chờ anh Hùng làm xong api FAQ thì gắn vào
//@ts-nocheck
import React, { FC, useEffect, useState } from "react";
import { View, Text, Container, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading } from "@/components";

import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { getNewFeed } from "@/api/NewFeed";
import { NewsProps } from "@/navigation/types/profile";
import { NewFeedData } from "@/types/NewFeed";
import { settings } from "@/config";

const { padding, mainColorText, successColor } = settings.styles;
import { _format } from "@/utils";
const PrivacyPolicyScreen: FC<NewsProps> = ({ navigation }) => {
  const [data, setData] = useState<NewFeedData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const params = { pageIndex: current, pageSize: 10 };
          const res = await getNewFeed(params);
          setData([...res.Data.Items]);
          if (current >= res.Data.TotalPage) {
            setPage({ ...page, next: false });
          }
          if (!ready) setReady(true);
        }
      } catch (error) {
        throw new Error("FETCH FAQ DATA IS FAILED !");
      }
    })();
  }, [page.current]);

  return (
    <Container style={styles.container}>
      <HeaderRoot title="Chính sách" filter={true} previous={() => navigation.goBack()} />
      {!ready && <LazyLoading />}
      {ready && !data.length && (
        <Empty text="Không tìm thấy câu hỏi thường gặp nào" />
      )}
      {ready && data.length > 0 && (
        <FlatList
          data={data}
          style={styles.body}
          onEndReached={() => setPage({ ...page, current: page.current + 1 })}
          onEndReachedThreshold={0.5}
          keyExtractor={(i) => i.Id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("PrivacyPolicyDetail", {
                  bannerImage: item.BannerUrl,
                  backgroundImage: item.BackGroundImgUrl,
                  content: item.Content,
                  title: item.Title,
                })
              }
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

                  <Text style={styles.hospital}>{item.HospitalName}</Text>




                </View>
              </View>
            </TouchableWithoutFeedback>
          )
          }
        />
      )}
    </Container >
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
    alignItems: 'center'
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




