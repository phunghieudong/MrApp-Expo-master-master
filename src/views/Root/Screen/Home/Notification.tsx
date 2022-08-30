
// //@ts-nocheck
// import { getNotifications } from "@/api/Notification";
// import { Empty, HeaderRoot } from "@/components";
// import { NotificationProps } from "@/navigation/types/RootStack";
// import { NotificationData } from "@/types/Notification";
// import { Container, Text, View } from "native-base";
// import React, { FC, useEffect, useState } from "react";
// import { StyleSheet } from "react-native";

// const NotificationScreen: FC<NotificationProps> = ({ navigation }) => {
//   const [data, setData] = useState<NotificationData[]>([]);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await getNotifications();
//         setData([...res.Data]);
//         if (!ready) setReady(true);
//       } catch (error) {
//         throw new Error("FETCH NOTIFICATIONS DATA IS FAILED");
//       }
//     })();
//   }, []);

//   return (
//     <Container>
//       <HeaderRoot title="thông báo" previous={() => navigation.goBack()} />
//       {/* <Empty text="Không tìm thấy bất kỳ thông báo nào" /> */}
//       <View>

//         <Text>asdasdasdasdadasd</Text>
//       </View>
//     </Container>
//   );
// };

// const styles = StyleSheet.create({});

// export default NotificationScreen;





//@ts-nocheck
import React, { FC, useEffect, useState } from "react";
import { View, Text, Container, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading } from "@/components";
import { getNotifications } from "@/api/Notification";

import { NotificationProps } from "@/navigation/types/RootStack";
import { NotificationData } from "@/types/Notification";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { settings } from "@/config";

const { padding, mainColorText, successColor } = settings.styles;
import { _format } from "@/utils";
const NotificationScreen: FC<NotificationProps> = ({ navigation }) => {
  const [data, setData] = useState<NotificationData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const params = { pageIndex: current, pageSize: 10 };
          const res = await getNotifications(params);
          setData([...res.Data.Items]);
          if (current >= res.Data.TotalPage) {
            setPage({ ...page, next: false });
          }
          if (!ready) setReady(true);
        }
      } catch (error) {
        throw new Error("FETCH NEW FEED DATA IS FAILED !");
      }
    })();
  }, [page.current]);

  return (
    <Container style={styles.container}>
      <HeaderRoot title="Thông báo" previous={() => navigation.goBack()} />
      {!ready && <LazyLoading />}
      {ready && !data.length && (
        <Empty text="Không tìm thấy thông báo nào" />
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
                navigation.navigate("NewsDetail", {
                  bannerImage: item.BannerUrl,
                  backgroundImage: item.BackGroundImgUrl,
                  content: item.Content,
                  title: item.Title,
                })
              }
            >
              <View style={styles.box}>

                <View style={{ borderRadius: 12, backgroundColor: "#ffffff", flexDirection: "row", paddingVertical: 5, paddingLeft: 10 ,justifyContent:"flex-start", alignItems:'center'}}>
                  <View style={{backgroundColor:'#219EBC' , borderRadius:100 , height:20 , width:20 , justifyContent:'center', alignItems:"center", marginRight:30}}>

                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: "#666666", fontFamily: 'SFProDisplay-Bold', fontSize: 16 }}> {item.Title}</Text>
                    <Text style={{ color: "#666666", fontSize: 12 }}> {item.Content}</Text>
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

export default NotificationScreen;
