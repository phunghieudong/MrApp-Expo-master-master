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
import { getPolicy } from "@/api/Policy";
import { PolycyProps } from "@/navigation/types/profile";
import { PolicyData } from "@/types/Policy";
import { settings } from "@/config";

const { padding, mainColorText, successColor } = settings.styles;

const PrivacyPolicyScreen: FC<PolycyProps> = ({ navigation }) => {
  const [data, setData] = useState<PolicyData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const res = await getPolicy();
          setData([...res.Data]);
          if (current >= res.Data.TotalPage) {
            setPage({ ...page, next: false });
          }
        
           setReady(true);
        }
      } catch (error) {
        throw new Error("FETCH NEW FEED DATA IS FAILED !");
      }   finally {
        setReady(true);}
    })();
  }, [page.current]);

  console.log(ready, "ddddddddđ");

  return (
    <Container style={styles.container}>
      <HeaderRoot title="Chính sách" previous={() => navigation.goBack()} />

      {!ready && <LazyLoading />}

      {ready && !data.length && (
        <Empty text="Không tìm thấy bất kỳ tin tức nào" />
      )}

      {ready && data.length > 0 && (
        <FlatList
          data={data}
          style={styles.body}
          onEndReached={() => setPage({ ...page, current: page.current + 1 })}
          onEndReachedThreshold={0.5}
          keyExtractor={(i) => i.Id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>

         
              <View style={styles.box}>
              
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", paddingVertical: 5 }}>
            
                  <Text style={{ color: "#666666" }}> {item.Title}</Text>
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
    backgroundColor: "#fff",
  },
  body: {
    paddingHorizontal: padding,
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 14,
    marginTop: 5,
    flexDirection: "column",

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
  detail: {
    flex: 1,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 18,
    padding: 8,
    left: 8,

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
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(0, 0, 0, .5)",
    fontFamily: "SFProDisplay-Regular",
  },
});

export default PrivacyPolicyScreen;
