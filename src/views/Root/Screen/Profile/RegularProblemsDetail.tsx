
//   return (
//     <Container style={styles.container}>
//       <HeaderRoot title="FAQ" filter={true} previous={() => navigation.goBack()} />
//       <ScrollView>
//         <View>
//           <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
//             <View
//               style={{
//                 backgroundColor: "#219EBC",
//                 height: 65,
//                 width: "100%",
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingHorizontal: 24,
//               }}
//             >
//               <View>
//                 <Text
//                   style={{
//                     fontSize: 16,
//                     fontFamily: "SFProDisplay-Bold",
//                     color: "#fff",
//                   }}
//                 >
//                   Tiêu đề 1
//                 </Text>
//               </View>
//               <View>

//                 <Image
//                   source={require("../../../../assets/images/upfff.png")}
//                   style={{ height: 4.78, width: 9.33 }}
//                 />

//               </View>
//             </View>
//           </TouchableOpacity>
//           {shouldShow ? (
//             <View style={styles.box}>
//               <Text style={styles.step}>Bước 1:</Text>

//               <Text style={styles.text}>
//                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
//                 erat, sed diam voluptua.
//               </Text>
//               <Text style={styles.text}>
//                 At vero eos et accusam et justo duo dolores
//                 et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
//                 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
//                 sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
//                 et dolore magna
//               </Text>
//               <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
//                 <Image
//                   source={require("../../../../assets/images/FAQ.png")}
//                   style={{ height: 163, width: 370 , borderRadius:6 }}
//                 />
//               </View>
//             </View>
//           ) : null}

//         </View>

//       </ScrollView>
//     </Container>
//   );
// };




//@ts-nocheck
import React, { FC, useEffect, useState } from "react";
import { View, Text, Container, Icon } from "native-base";
import { Empty, HeaderRoot, LazyLoading } from "@/components";
import { getRegularProblems } from "@/api/RegularProblems";

import { RegularProblemsProps } from "@/navigation/types/RootStack";
import { RegularProblemsData } from "@/types/RegularProblems";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { settings } from "@/config";

const { padding, mainColorText, successColor } = settings.styles;
import { _format } from "@/utils";
import { Item } from 'native-base';
import { useRoute } from "@react-navigation/native";


const RegularProblemsDetailScreen: FC<RegularProblemsProps> = ({ navigation }) => {
  const [data, setData] = useState<RegularProblemsData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  const [shouldShow, setShouldShow] = useState(false);
  // chổ này là choorr này , chính xác là chổ này 
  const route = useRoute(); // cái params
  console.log("route ", route);
  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const params = { pageIndex: current, pageSize: 10, HospitalId: route.params.HospitalId }; // cái params
          const res = await getRegularProblems(params);
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

        <FlatList
          data={data}
          style={styles.body}
          keyExtractor={(i) => i.Id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback

            >
           
              <ScrollView style={{backgroundColor:'#1D87A2'}}>

                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                  <View
                    style={{
                      backgroundColor: "#219EBC",
                      height: 86,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 24,
                      
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "SFProDisplay-Bold",
                          color: "#fff",
                        
                        
                        }}
                      >
                        {item.Question}
                      </Text>
                    </View>
                    <View>

                      <Image
                        source={require("../../../../assets/images/upfff.png")}
                        style={{ height: 4.78, width: 9.33 }}
                      />

                    </View>
                  </View>
                </TouchableOpacity>
                {shouldShow ? (
                  <View style={styles.box}>

                    <Text style={{ color: '#666666', fontSize: 14 ,}}>
                      {item.Answer}
                    </Text>

                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                      <Image
                        source={require("../../../../assets/images/FAQ.png")}
                        style={{ height: 163, width: 370, borderRadius: 6 }}
                      />
                    </View>
                  </View>
                ) : null}



              </ScrollView>
     
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
   
  },
  body: {
 
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

export default RegularProblemsDetailScreen;



