//@ts-nocheck
import { schedule } from "@/api/ExaminationForm";
import { HeaderRoot, Loading, ModalLoading } from "@/components";
import { settings } from "@/config";
import { CheckScheduleNewProps } from "@/navigation/types/Home";
import { Container, Content, Icon, Text, Toast, View, Button } from "native-base";
import React, { FC, useEffect, useRef, useState } from "react";
// import { _format } from "@/utils";

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

const CheckScheduleNewScreen: FC<CheckScheduleNewProps> = ({
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
      navigation.navigate("Payment", {
        ...params,
        examinationFormId: examinationFormId as number,
        form: 0,
      });
    } else {
      setLoading(true);
      schedule(newParams)
        .then((res) => {
          const examinationFormId: number = res.Data.Id;
          navigation.navigate("Payment", {
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
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', }}>
              <Image
                source={require("../../../../assets/images/kttt2.png")}
                style={{ height: 20, width: 20, marginRight: 20 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.infotext, { marginTop: 0 }]}>
                  NGÀY KHÁM
                </Text>
                <Text style={{ fontSize: 18, color: '#000000' }}>{_format.getShortVNDate(user?.Created)}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingTop: 25 }}>
              <Image
                source={require("../../../../assets/images/kttt.png")}
                style={{ height: 18.75, width: 20, marginRight: 20 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.infotext, { marginTop: 0 }]}>
                  THỜI GIAN KHÁM
                </Text>
                <Text style={{ fontSize: 18, color: '#000000' }}>15:00 ~ 16:00</Text>
              </View>
            </View>
            <View style={{ paddingBottom: 8, flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingTop: 25 }}>
              <Image
                source={require("../../../../assets/images/diachi.png")}
                style={{ height: 22, width: 20, marginRight: 20 }}
              />
              <View style={{ flexDirection: 'column', }}>
                <Text style={[styles.infotext, { marginTop: 0 }]}>
                  KHOA KHÁM
                </Text>
                <Text style={{ fontSize: 18, color: '#000000' }}>Khoa ung bứu</Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: '#fff3e5', borderRadius: 100, width: 190, height: 30, marginBottom: 30 }}>
              <Text style={{ color: '#FB8500', fontSize: 12, fontFamily: "SFProDisplay-Regular", }}>KHU A - LẦU 02 - PHÒNG 208</Text>
            </View>
            <View style={{ backgroundColor: '#E8F5F8', height: 124, width: 315, justifyContent: 'center', alignItems: "center", borderRadius: 8, }}>
              <Text style={{ color: '#666666', fontSize: 12 }}>SỐ THỨ TỰ KHÁM BỆNH</Text>
              <Text style={{ color: "#219EBC", fontSize: 50 }}>A120</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 33 }}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("TermOfMedical")}
              >
                <Image
                  source={require("../../../../assets/images/qtkb.png")}
                  style={{ height: 20, width: 15, marginRight: 5 }}
                />
                <Text style={{ color: "#023047", fontSize: 16 }}>Xem quy trình khám bệnh</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.agreement}>
            <TouchableWithoutFeedback onPress={() => setAgreement(!agreement)}>
              <Icon
                type="Feather"
                name={agreement ? "check-circle" : "circle"}
                style={[
                  styles.agreementchkbox,
                  agreement && { color: orangeColor },
                ]}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.agreementtext}>
              Tôi đồng ý với{" "}
              <Text style={styles.agreementlink}>chính sách</Text> và{" "}
              <Text style={styles.agreementlink}>quy trình khám bệnh</Text> của{" "}
              {hospitalName}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 30, justifyContent: 'space-between' }}>

            <TouchableWithoutFeedback
              onPress={toggleModal}
            // onPress={agreement && !loading ? navPayment : undefined}
            >

              <View
                style={[styles.btn, { backgroundColor: "#D9D9D9", width: 119, height: 53, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }]}
              // style={[styles.btn, agreement && { backgroundColor: "#FFDDDD" }]} đổi màu khi click sự kiện

              >
                <Text style={styles.btntext1}>TRỞ VỀ</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={agreement && !loading ? navPayment : undefined}
            >
              <View
                style={[styles.btn, { backgroundColor: "#142977", width: 119, height: 53, justifyContent: 'center', alignItems: 'center' }]}
              >
                <Text style={styles.btntext}>TIẾP THEO</Text>
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
    fontSize: 12,
    fontFamily: "SFProDisplay-Medium",
    color: "#666666",
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
    fontSize: 16,
    letterSpacing: 1.25,
    fontFamily: "SFProDisplay-Medium",
  },
  btntext1: {
    color: "white",
    fontSize: 16,
    letterSpacing: 1.25,
    fontFamily: "SFProDisplay-Medium",
  },
});

export default CheckScheduleNewScreen;
