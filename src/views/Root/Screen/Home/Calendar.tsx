//@ts-nocheck
import { getExaminationSchedules } from "@/api/ExaminationForm";
import { HeaderRoot, LazyLoading } from "@/components";
import { settings } from "@/config";
import { CalendarProps } from "@/navigation/types/Home";
import { ExaminationScheduleData } from "@/types/ExaminationForm";
import { _format } from "@/utils";
import { Container, Icon, Text, View } from "native-base";
import React, { FC, useEffect, useState } from "react";
import { Dimensions, InteractionManager, StyleSheet, ScrollView } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";


const { width: dW } = Dimensions.get("screen");
const {
  mainColor,
  padding,
  mainColorText,
  blueColor,
  dangerColor,
  placeholderColor,
  borderColor,
} = settings.styles;

LocaleConfig.locales["vn"] = {
  monthNames: [
    "Tháng 1,",
    "Tháng 2,",
    "Tháng 3,",
    "Tháng 4,",
    "Tháng 5,",
    "Tháng 6,",
    "Tháng 7,",
    "Tháng 8,",
    "Tháng 9,",
    "Tháng 10,",
    "Tháng 11,",
    "Tháng 12,",
  ],
  monthNamesShort: [
    "Th1,",
    "Th2,",
    "Th3,",
    "Th4,",
    "Th5,",
    "Th6,",
    "Th7,",
    "Th8,",
    "Th9,",
    "Th10,",
    "Th11,",
    "Th12,",
  ],
  dayNames: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
  dayNamesShort: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  today: "Ngày hôm nay",
};
LocaleConfig.defaultLocale = "vn";

const CalendarScreen: FC<CalendarProps> = ({
  navigation,
  route: {
    params: { doctorId, hospitalId, specialistTypeId, typeId, examinationDate },
  },
}) => {
  const nav = (examinationDate: Date) => {
    navigation.navigate(typeId === 1 ? "SpecialSchedule" : "NormalSchedule", {
      examinationDate,
    });
  };

  // data
  const [calendars, setCalendars] = useState<any>();

  useEffect(() => {
    (async () => {
      const res = await getExaminationSchedules(
        hospitalId,
        doctorId,
        specialistTypeId,
        undefined,
        "Id desc",
        1,
        62
      );
      const data: Array<ExaminationScheduleData> = res.Data.Items;
      const result = {};
      data.forEach((x) => {
        if (x.IsMaximumAfternoon && x.IsMaximumMorning && x.IsMaximumOther) {
          result[_format.getYYMMDDDD(x.ExaminationDate)] = {
            selected: false,
            selectedColor: "#fff",
            selectedTextColor: dangerColor,
          };
        } else {
          result[_format.getYYMMDDDD(x.ExaminationDate)] = {
            selected: true,
            selectedColor: "#fff",
            selectedTextColor: blueColor,
          };
        }
      });
      if (examinationDate) {
        result[_format.getYYMMDDDD(examinationDate)] = {
          selected: true,
          selectedColor: blueColor,
          selectedTextColor: "#fff",
        };
      }
      setCalendars(result);
    })();
  }, []);

  // interaction
  const [ready, setReady] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true);
    });
  }, []);

  return (
    <Container>

      <HeaderRoot title="Chọn ngày khám" previous={() => navigation.goBack()} />
      <ScrollView>
        {!ready && <LazyLoading />}
        {ready && (
          <>
            <Calendar
              renderArrow={(direction) => (
                <Icon
                  type="Ionicons"
                  name={direction === "left" ? "chevron-back" : "chevron-forward"}
                  style={styles.headingicon}
                />
              )}
              minDate={new Date()}
              firstDay={0}
              onDayPress={(day) => nav(new Date(day.dateString))}
              enableSwipeMonths={true}
              disableAllTouchEventsForDisabledDays
              hideExtraDays={true}
              markedDates={calendars}
              theme={
                {
                  "stylesheet.calendar.main": {
                    container: { paddingLeft: 0, paddingRight: 0 },
                  },
                  "stylesheet.calendar.header": {
                    header: {
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#D9D9D9",
                    },
                    week: {
                      marginTop: 0,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "rgba(125,125,125,0.25)",
                    },
                    dayTextAtIndex6: {
                      color: dangerColor,
                    },
                    monthText: styles.headingtext,
                    dayHeader: styles.date,
                  },
                  dayTextColor: placeholderColor,
                  todayTextColor: placeholderColor,
                  textDisabledColor: placeholderColor,
                  textDayFontFamily: "SFProDisplay-Regular",
                  textMonthFontFamily: "SFProDisplay-Regular",
                  textDayHeaderFontFamily: "SFProDisplay-Regular",
                  textMonthFontSize: 18,
                  textDayFontSize: 16,
                  textDayHeaderFontSize: 16,
                  monthTextColor: "#fff",
                } as any
              }
            />
            <View style={{ marginTop: 30, width: '100%', height: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: "#D9D9D9", borderRadius: 5, height: 32, width: 32, marginRight: 10 }}></View>
                <Text>
                  Full lịch
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: "#142977", borderRadius: 5, height: 32, width: 32, marginRight: 10 }}></View>
                <Text>
                  Ngày trống
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", height: 167, borderRadius: 12, marginTop: 40, justifyContent: "center", alignItems: "center" }}>
              <View style={{ backgroundColor: '#142977', width: 343, height: 167, borderRadius: 12, justifyContent: "flex-start", alignItems: "flex-start", paddingTop: 10, paddingLeft: 10 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>


                  <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: "#ffffff", fontSize: 16 }}>02 tháng 9 , 2021</Text>
                    <Text style={{ color: "#ffffff", fontSize: 16 }}>09:00 ~ 10:10</Text>
                  </View>
                  <View>
                    <Text style={{ color: "#ffffff", fontSize: 20, fontFamily: 'SFProDisplay-Bold' }}>Phòng khám 401</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#ffffff", fontSize: 16 }}>Bác sĩ:</Text>
                    <Text style={{ color: "#ffffff", fontSize: 16 }}>Nguyễn Anh Tuấn</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#ffffff", fontSize: 16 }}>Dịch vụ:</Text>
                    <Text style={{ color: "#ffffff", fontSize: 16 }}>Chích ngừa uốn ván</Text>
                  </View>


                </View>
                <View style={{ justifyContent: "flex-end", alignItems: 'flex-end', flexDirection: "row-reverse" }}>
                  <Text style={{ fontSize: 14, fontFamily: 'SFProDisplay-Bold', color: '#fff' }}>ĐÃ XÁC NHẬN</Text>
                </View>
              </View>

            </View>
            <View style={{ width: "100%", height: 167, borderRadius: 12, marginTop: 10, justifyContent: "center", alignItems: "center" }}>
              <View style={{ backgroundColor: '#D9D9D9', width: 343, height: 167, borderRadius: 12, justifyContent: "flex-start", alignItems: "flex-start", paddingTop: 10, paddingLeft: 10 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>


                  <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: "#000000", fontSize: 16 }}>02 tháng 9 , 2021</Text>
                    <Text style={{ color: "#000000", fontSize: 16 }}>09:00 ~ 10:10</Text>
                  </View>
                  <View>
                    <Text style={{ color: "#000000", fontSize: 20, fontFamily: 'SFProDisplay-Bold' }}>Phòng khám 401</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#000000", fontSize: 16 }}>Bác sĩ:</Text>
                    <Text style={{ color: "#000000", fontSize: 16 }}>Nguyễn Anh Tuấn</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#000000", fontSize: 16 }}>Dịch vụ:</Text>
                    <Text style={{ color: "#000000", fontSize: 16 }}>Chích ngừa uốn ván</Text>
                  </View>


                </View>
                <View style={{ justifyContent: "flex-end", alignItems: 'flex-end', flexDirection: "row" }}>
                  <Text style={{ fontSize: 14, fontFamily: 'SFProDisplay-Bold', color: '#000000' }}>XÁC NHẬN</Text>
                  <Text style={{ fontSize: 14, fontFamily: 'SFProDisplay-Bold', color: '#000000' }}>HỦY</Text>
                </View>
              </View>
            </View>
            {/* <View style={styles.explain}>
            <Text style={styles.explainheading}>Chú thích</Text>
            <View style={styles.explainbody}>
              <View style={styles.explainbox}>
                <View style={styles.explaincolor} />
                <Text style={styles.explaintext}>Ngày nghỉ</Text>
              </View>
              <View style={styles.explainbox}>
                <View
                  style={[styles.explaincolor, { backgroundColor: blueColor }]}
                />
                <Text style={styles.explaintext}>Ngày có thể đặt</Text>
              </View>
              <View style={styles.explainbox}>
                <View
                  style={[
                    styles.explaincolor,
                    { backgroundColor: dangerColor },
                  ]}
                />
                <Text style={styles.explaintext}>Ngày đủ lịch hẹn</Text>
              </View>
            </View>
          </View> */}
          </>
        )}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
  },
  heading: {
    backgroundColor: mainColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: padding - 6,
    paddingBottom: 20,
    marginTop: -10,
  },
  headingtext: {
    color: "#222B45",
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "SFProDisplay-Medium",
  },
  headingicon: {
    color: "#222B45",
  },
  dates: {
    width: dW,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  date: {
    width: "14.2857142857%",
    textAlign: "center",
    height: 50,
    lineHeight: 50,
    color: mainColorText,
    fontSize: 16,
    fontFamily: "SFProDisplay-Regular",
  },
  item: {
    width: "14.2857142857%",
    height: 50,
    lineHeight: 50,
    color: placeholderColor,
    borderBottomWidth: 1,
    borderColor: borderColor,
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 16,
    fontFamily: "SFProDisplay-Regular",
    textAlign: "center",
  },
  itemactive: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: blueColor,
    color: "#fff",
    textAlignVertical: "center",
    textAlign: "center",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  explain: {
    borderWidth: 1,
    borderColor,
    alignSelf: "flex-end",
    marginHorizontal: padding,
    marginTop: 10,
    overflow: "hidden",
    borderRadius: 4,

  },
  explainheading: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: mainColor,
    color: "#fff",
  },
  explainbody: {
    paddingHorizontal: 10,
  },
  explainbox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  explaincolor: {
    width: 14,
    height: 14,
    backgroundColor: placeholderColor,
    marginRight: 8,
  },
  explaintext: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
  },
});

export default CalendarScreen;
