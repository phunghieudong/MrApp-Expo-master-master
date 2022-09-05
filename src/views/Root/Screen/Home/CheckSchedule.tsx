//@ts-nocheck
import { schedule } from "@/api/ExaminationForm";
import { HeaderRoot, Loading, ModalLoading } from "@/components";
import { settings } from "@/config";
import { CheckScheduleProps } from "@/navigation/types/Home";
import { Container, Content, Icon, Text, Toast, View, Button } from "native-base";
import React, { FC, useEffect, useRef, useState } from "react";


import {
  Linking,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import { useAppSelector } from "@/store/hook";
import { _format } from "@/utils";
import { UserData } from "@/types/User";
import { Modalize } from "react-native-modalize";

const {
  padding,
  mainColor,
  mainColorText,
  mainColorLight,
  borderColor,
  blueColor,
  orangeColor,
  placeholderColor,
} = settings.styles;

const CheckScheduleScreen: FC<CheckScheduleProps> = ({
  navigation,
  route: { params },
}) => {
  const {
    examinationDate,
    examinationScheduleDetailId,
    examinationScheduleDetailName,
    hospitalAddress,
    hospitalId,
    hospitalName,
    hospitalPhoneNumber,
    hospitalWebsite,
    isBHYT,
    recordId,
    roomExaminationId,
    roomExaminationName,
    status,
    typeId,
    doctorName,
    serviceTypeId,
    serviceTypeName,
    specialistTypeName,
    vaccineTypeName,
    form,
    examinationFormId,
    vaccineTypeId,
    doctorId,
    specialistTypeId,
  } = params;

  // lấy user hiện tại
  const user = useAppSelector((state) => state.user.current) as UserData;

  // chuyển hướng trang
  const [loading, setLoading] = useState(false);

  const navPayment = async () => {
    const newParams = {
      doctorId: doctorId || null,
      examinationDate: examinationDate,
      hospitalId: hospitalId,
      isBHYT: isBHYT,
      recordId: recordId,
      serviceTypeId: serviceTypeId,
      typeId: typeId,
      examinationScheduleDetailId: examinationScheduleDetailId,
      roomExaminationId: roomExaminationId,
      specialistTypeId: specialistTypeId || null,
      vaccineTypeId: vaccineTypeId || null,
      reExaminationDate: null,
      status: 0,
      paymentMethodId: 3,
      examinationIndex: "",
      note: "",
      feeExamination: 0,
      bankInfoId: null,
      comment: "",
    };

    if (typeof form === "number") {
      navigation.navigate("NormalSchedule", {
        ...params,
        examinationFormId: examinationFormId as number,
        form: 0,
      });
    } else {
      setLoading(true);
      schedule(newParams)
        .then((res) => {
          const examinationFormId: number = res.Data.Id;
          navigation.navigate("NormalSchedule", {
            ...params,
            examinationFormId,
            form: 0,
          });
        })
        .catch((err) => Toast.show({ text: err.response.data.ResultMessage }))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // đồng ý với chính sách ...
  const [agreement, setAgreement] = useState(false);

  // mở điện thoại / website
  const handleLinking = async (type: "website" | "phone") => {
    let url = hospitalWebsite;
    if (type === "phone") {
      if (Platform.OS === "ios") url = `telprompt:${hospitalPhoneNumber}`;
      else url = `tel:${hospitalPhoneNumber}`;
    }

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Toast.show({ text: "Lỗi không thể thưc hiện thao tác này" });
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Container style={styles.container}>
      <HeaderRoot
        title="KIỂM TRA THÔNG TIN"
        filter={true}
        previous={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.body} style={{}}>
        <View style={[styles.hospital, { padding }]}>

          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: "flex-start" }}>
            <Text style={styles.hospitalname}>{hospitalName}</Text>

            <Text style={styles.hospitalvalue}>{hospitalAddress}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require("../../../../assets/images/i.png")}
              style={{ height: 24, width: 11 }}
            />
          </View>


        </View>
        <View style={styles.info}>

          <View style={styles.infobox}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Website
              </Text>
              <Text>{user?.Email}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Số điện thoại
              </Text>
              <Text>{user?.CreatedBy}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Tên bệnh nhân
              </Text>
              <Text>{user?.UserFullName}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Mã bệnh viện
              </Text>
              <Text>{user?.CountryId}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Ngày khám
              </Text>
              <Text>{_format.getVNDate(user?.Created)}</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Giờ khám
              </Text>

              <Text>{_format.getVNDate(user?.Created)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Khu vực khám
              </Text>
              <Text>{user?.CountryName}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Phòng khám
              </Text>

              <Text>{user?.NationName}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Bác sĩ khám
              </Text>
              <Text>{user?.Code}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Loại dịch vụ khám
              </Text>
              <Text>{user?.Code}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Trạng thái
              </Text>
              <Text>{user?.Code}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Loại khám
              </Text>
              <Text>{user?.Code}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Khoa khám
              </Text>
              <Text>{user?.Code}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Sổ bảo hiểm
              </Text>
              <Text>{user?.Code}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={[styles.infotext, { marginTop: 0 }]}>
                Khoa khám
              </Text>
              <Text>{user?.Code}</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', paddingTop: 30 }}>
            <TouchableWithoutFeedback
              onPress={agreement && !loading ? navPayment : undefined}
            >
              <View
                style={[styles.btn, { backgroundColor: "#142977", width: 80, height: 30, justifyContent: 'center', alignItems: 'center' }]}
              >
                <Text style={styles.btntext}>ĐỔI LỊCH</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={toggleModal}
            // onPress={agreement && !loading ? navPayment : undefined}
            >

              <View
                style={[styles.btn, { backgroundColor: "rgba(220, 35, 60, 0.1)", width: 80, height: 30, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }]}
              // style={[styles.btn, agreement && { backgroundColor: "#FFDDDD" }]} đổi màu khi click sự kiện

              >
                <Text style={styles.btntext1}>HỦY LỊCH</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

        </View>
        <Modal isVisible={isModalVisible} style={{ borderRadius: 2 }}>

          <TouchableOpacity onPress={toggleModal} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
            <Image
              source={require("../../../../assets/images/out.png")}
              style={{ height: 24, width: 24, }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'column', justifyContent: "center", alignItems: 'center', }}>


            <View style={{ backgroundColor: "#fff", height: 121, width: 343, borderRadius: 12, justifyContent: 'center', alignItems: 'center', }}>


              <Text style={{ paddingHorizontal: 40, paddingTop: 10, textAlign: 'center', color: '#DC233C', fontFamily: "SFProDisplay-Bold" }}>Lịch đã được hủy thành công</Text>
              <Text style={{ paddingHorizontal: 40, textAlign: 'center', fontSize: 16, }}>Vui lòng liên hệ hotline 1900 000 khi cần được hỗ trợ</Text>
            </View>

          </View>

        </Modal>
      </Content>
      <ModalLoading visible={loading} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flexGrow: 1,
  },
  hospital: {
    paddingVertical: 20,
    borderColor,
    backgroundColor: "#E8F5F8",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: 120
  },
  hospitalname: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "SFProDisplay-Bold",
    color: blueColor,
  },
  hospitalspecial: {
    fontSize: 16,
    fontFamily: "SFProDisplay-Bold",
    color: "#37A6F7",
  },
  hospitallabel: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: "#0000006a",
    letterSpacing: 0.5,
  },
  hospitalvalue: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "SFProDisplay-Regular",
    color: "#0000009a",
  },
  info: {
    padding: padding,
  },
  datebox: {
    padding: 20,
    backgroundColor: mainColor,
    borderWidth: 1,
    borderColor: "#707070",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  infobox: {
    padding: 15,
    backgroundColor: "#fff",
    // borderWidth: 1,
    // borderColor: "#219EBC",
    borderRadius: 2,
    marginTop: 10,
  },
  infotext: {
    fontSize: 16,
    // fontFamily: "SFProDisplay-Semibold",
    color: "#525252",
    marginTop: 5,
  },
  date: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "SFProDisplay-Semibold",
    color: "#fff",
  },
  time: {
    fontSize: 30,
    lineHeight: 34,
    fontFamily: "SFProDisplay-Bold",
    color: "#fff",
    marginTop: 5,
  },
  index: {
    padding: 20,
    backgroundColor: mainColorLight,
    borderWidth: 1,
    borderColor: mainColor,
    borderStyle: "dashed",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  indexlabel: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "SFProDisplay-Semibold",
    color: mainColor,
  },
  indexvalue: {
    fontSize: 30,
    lineHeight: 34,
    fontFamily: "SFProDisplay-Bold",
    color: mainColor,
  },
  agreement: {
    flexDirection: "row",
    marginTop: 10,
  },
  agreementchkbox: {
    marginRight: 4,
    padding: 4,
    fontSize: 22,
    color: "#8794BE",
  },
  agreementtext: {
    flex: 1,
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "SFProDisplay-Regular",
    color: mainColorText,
  },
  agreementlink: {
    color: blueColor,
    fontFamily: "SFProDisplay-Medium",
  },
  btn: {

    backgroundColor: placeholderColor,
    borderRadius: 100,

  },
  btntext: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1.25,
    fontFamily: "SFProDisplay-Medium",
  },
  btntext1: {
    color: "#DC233C",
    fontSize: 12,
    letterSpacing: 1.25,
    fontFamily: "SFProDisplay-Medium",
  },
});

export default CheckScheduleScreen;
