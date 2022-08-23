
//@ts-nocheck
import { getUpcomingExaminationCalendar } from "@/api/ExaminationCalendar";
import {
  Dialog,
  HeaderRoot,
  LazyLoading,
  Loading,
  ModalCenter,
  ModalLoading,
} from "@/components";

import { settings } from "@/config";
import { CalendarData } from "@/types/ExaminationCalendar";
import { Container, Text, Toast, View } from "native-base";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  FlatList,
  InteractionManager,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ExaminationCalendarProps } from "@/navigation/types/Home";
import { removePayment, updatePayment } from "@/api/ExaminationForm";
import { Modalize } from "react-native-modalize";
import ModalBottom from "@/components/ModalBottom";
import { _format } from "@/utils";
import Modal from "react-native-modal";
// import { TouchableOpacity } from "react-native-gesture-handler";
const {
  mainColorText,
  padding,
  blueColor,
  dangerColor,
  dangerColorLight,
  borderColor,
  successColor,
} = settings.styles;

const renderItem = (
  item: CalendarData,
  index,
  pay: (item: CalendarData) => void,
  toggleModal: (item: CalendarData, index: number) => void,
  see: (item: CalendarData) => void

) => {
  let first = {};
  if (index === 0) first["borderTopWidth"] = 0;

  return (

    <TouchableOpacity onPress={() => navigation.navigate("RegularProblemsDetail")}>
      <View style={[styles.item, first]}>

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
    </TouchableOpacity>
  );
};

const RegularProblemsScreen: FC<ExaminationCalendarProps> = ({navigation}) => {


  // thông báo hủy lịch hẹn, xem thông tin lịch hẹn
  const notification = useRef<Modalize>(null);
  const seeCalendar = useRef<Modalize>(null);
  const [item, setItem] = useState<CalendarData & { index?: number }>();
  // const calendar = useRef<{ examinationFormId?: number; index?: number, status?: number }>({});

  // các chức năng
  const pay = (item: CalendarData) => {
    const newParams = {
      doctorId: item.DoctorId,
      doctorName: item.DoctorDisplayName,
      examinationDate: item.ExaminationDate,
      examinationScheduleDetailId: item.ExaminationScheduleDetailId,
      examinationScheduleDetailName: item.ConfigTimeExaminationValue,
      hospitalId: item.HospitalId,
      hospitalName: item.HospitalName,
      hospitalAddress: item.HospitalAddress,
      hospitalWebsite: item.HospitalWebSite,
      hospitalPhoneNumber: item.HospitalPhone,
      isBHYT: item.IsBHYT ? 1 : 2,
      roomExaminationId: item.RoomExaminationId,
      roomExaminationName: item.RoomExaminationName,
      specialistTypeId: item.SpecialistTypeId
        ? item.SpecialistTypeId
        : undefined,
      specialistTypeName: item.SpecialistTypeName
        ? item.SpecialistTypeName
        : undefined,
      serviceTypeId: item.ServiceTypeId,
      serviceTypeName: item.ServiceTypeName,
      typeId: item.TypeId,
      recordId: item.RecordId,
      examinationFormId: item.Id,
      status: item.Status,
      form: 0,
    };
    navigation.navigate("CheckSchedule", { ...newParams });
  };

  const noti = (item: CalendarData, index: number) => {
    setItem({ ...item, index });
    // notification.current?.open();
    setModalVisible(!isModalVisible);
  };

  const remove = async () => {
    if (item) {
      try {
        const { index, Id } = item;
        if (typeof index === "number") {
          await removePayment(Id);
          setCalendarsUpcoming([
            ...calendarsUpcoming.slice(0, index),
            ...calendarsUpcoming.slice(index + 1),
          ]);
          notification.current?.close();
        }
      } catch (error) {
        Toast.show({ text: "Hủy lịch hẹn thất bại" });
      }
    }
  };

  const see = (item: CalendarData) => {
    setItem(item);
    seeCalendar.current?.open();
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // dữ liệu lịch sử khám bệnh sắp tới
  const [ready, setReady] = useState(false);
  const [calendarsUpcoming, setCalendarsUpcoming] = useState<
    Array<CalendarData>
  >([]);

  // page
  const [page, setPage] = useState({ current: 1, next: true });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          setLoading(true);
          const res = await getUpcomingExaminationCalendar(current, 10);
          if (current <= 1) {
            setCalendarsUpcoming([...res.Data.Items]);
          } else {
            setCalendarsUpcoming([...calendarsUpcoming, ...res.Data.Items]);
          }
          if (current >= res.Data.TotalPage) {
            setPage({ ...page, next: false });
          }
        }
      } catch (error) {
        throw new Error("FETCH CALENDAR DATA IS FAILED !");
      } finally {
        if (!ready) setReady(true);
        setLoading(false);
      }
    })();
  }, [page.current]);

  return (
    <Container>
      <HeaderRoot title="FAQ" filter={true} />
      {!ready && <LazyLoading />}
      {ready && (
        <>
          <FlatList
            style={styles.body}
            data={calendarsUpcoming}
            onEndReached={() => setPage({ ...page, current: page.current + 1 })}
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.Id.toString()}
            renderItem={({ item, index }) =>



              renderItem(item, index, pay, noti, see)

            }
          />


          <ModalLoading visible={loading} />


        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: padding,
  },
  item: {
    flexDirection: "row",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor,
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
    fontFamily: "SFProDisplay-Bold",
    letterSpacing: 2,
  },
  right: {
    flex: 1,
    justifyContent: 'center'
  },
  date: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: mainColorText,
  },
  paid: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Bold",
    color: "#142977",
  },
  hospital: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    fontFamily: "SFProDisplay-Semibold",
    color: mainColorText,
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
    backgroundColor: dangerColorLight,
    minWidth: 100,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 100,
  },

  modal: {
    paddingHorizontal: padding,
  },

  value: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "SFProDisplay-Regular",
    color: "#0000009a",
  },
});

export default RegularProblemsScreen;
