//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { Container, Icon, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  InteractionManager,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { TimePickerProps } from "@/navigation/types/Home";
import { _format } from "@/utils";
const { mainColorText, blueColor, borderColor, placeholderColor, orangeColor } =
  settings.styles;

const TimePickerScreen = ({
  navigation,
  route: {
    params: {
      examinationScheduleDetailId,
      ConfigTimeExaminationDayOfWeeks,
      RoomExaminationName,
      SessionTypeName,
      typeId,
      doctorName,
    },
  },
}: TimePickerProps) => {
  // chuyển hướng
  const nav = (
    examinationScheduleDetailId: number,
    examinationScheduleDetailName: string,
    roomExaminationId: number,
    roomExaminationName: string
  ) => {
    navigation.navigate(typeId === 0 ? "NormalSchedule" : "SpecialSchedule", {
      examinationScheduleDetailId,
      examinationScheduleDetailName,
      roomExaminationId,
      roomExaminationName,
    });
  };

  return (
    <Container>
      <HeaderRoot title="CHỌN GIỜ KHÁM" previous={() => navigation.goBack()} />
      <View style={{ backgroundColor: '#E8F5F8', flex: 1 }}>
        <View style={styles.box}>
          <View style={{ flexDirection: 'column', borderBottomWidth: 0.5, borderColor: '#D9D9D9' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image
                source={require("../../../../assets/images/bs.png")}
                style={{ height: 53, width: 53, marginRight: 10 }}
              />
              <View style={{ width: 250 }}>
                <Text style={{ color: '#219EBC', fontSize: 16 }}>Bác sĩ</Text>
                <Text style={{ fontSize: 20, color: '#000000', fontFamily: "SFProDisplay-Bold", }}>{doctorName}</Text>


              </View>
              <Image
                source={require("../../../../assets/images/2.png")}
                style={{ height: 29, width: 29, marginRight: 10 }}
              />
            </View>
            <View style={{ paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>
              <View style={{ paddingTop: 12 }}>
                <Text style={{ color: "#666666", fontSize: 16 }}>Chuyên khoa</Text>
                <Text style={{ color: "#666666", fontSize: 16 }}>Giới tính</Text>
                <Text style={{ color: "#666666", fontSize: 16 }}>Lịch khám</Text>
              </View>
              <View style={{ paddingTop: 12 }}>
                <Text style={{ color: "#000000", fontSize: 16 }}>{RoomExaminationName}</Text>
                <Text style={{ color: "#000000", fontSize: 16 }}>{RoomExaminationName}</Text>
                <Text style={{ color: "#000000", fontSize: 16 }}>{RoomExaminationName}</Text>
                {/* {_format.getShortVNDate(item?.ExaminationDate)} */}
              </View>
            </View>
          </View>
          <View >
            <Text style={{ color: "#666666", fontSize: 16, paddingTop: 16 }}>Buổi sáng</Text>
          </View>
          {/* <View style={styles.detail}>
          <Icon type={"Fontisto" as any} name="doctor" style={styles.icon} />
          <Text style={styles.value}>{doctorName}</Text>
        </View>
        <View style={styles.detail}>
          <Icon type="MaterialIcons" name="add-location" style={styles.icon} />
          <Text style={styles.label}>Phòng:</Text>
          <Text style={styles.value}>{RoomExaminationName}</Text>
        </View> */}
          {/* <View style={styles.detail}>
          <Icon
            type="MaterialIcons"
            name="published-with-changes"
            style={[styles.label, { color: orangeColor }]}
          />
          <Text style={[styles.value, { color: orangeColor }]}>
            Được thay thế bởi: Trần Tấn Tính
          </Text>
        </View> */}
          <View style={styles.session}>

            <FlatList
              numColumns={3}
              data={ConfigTimeExaminationDayOfWeeks}
              keyExtractor={(i) => i.ExaminationScheduleDetailId.toString()}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={
                    !item.IsMaximum
                      ? () =>
                        nav(
                          item.ExaminationScheduleDetailId,
                          item.ConfigTimeExaminationValue,
                          item.RoomExaminationId,
                          item.RoomName
                        )
                      : () => null
                  }
                >
                  <View
                    style={[
                      styles.time,
                      item.IsMaximum && {
                        backgroundColor: placeholderColor,
                        borderColor: placeholderColor,
                      },
                      item.ExaminationScheduleDetailId ===
                      examinationScheduleDetailId && {
                        backgroundColor: blueColor,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.timetext,
                        (item.IsMaximum ||
                          item.ExaminationScheduleDetailId ===
                          examinationScheduleDetailId) && {
                          color: "#fff",
                        },
                      ]}
                    >
                      {item.ConfigTimeExaminationValue}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        </View>


      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: 'red'
  },
  box: {
    marginHorizontal: 10,
    marginTop: 17,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    fontSize: 16,
    color: blueColor,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "SFProDisplay-Light",
    color: mainColorText,
    marginRight: 4,
  },
  value: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "SFProDisplay-Medium",
  },
  session: {

    paddingVertical: 10,

  },

  time: {
    borderWidth: 1,
    borderRadius: 4,
    width: 110,
    marginRight: 10,
    alignSelf: "flex-start",
    paddingTop: 4,
    paddingBottom: 6,
    marginTop: 10,
    backgroundColor: '#142977',
    borderColor: '#142977'
  },
  disabled: {
    backgroundColor: placeholderColor,
    borderColor: placeholderColor,
  },
  disabledtext: {
    color: "#fff",

  },
  timetext: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: "white",
  },
});

export default TimePickerScreen;
