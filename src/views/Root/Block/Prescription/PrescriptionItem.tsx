//@ts-nocheck
import { DiagnosticData } from "@/types/MedicalRecordDetail";
import { Icon, Text, View } from "native-base";
import React, { FC, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import BaseHospital from "../Base/BaseHospital";
import * as ImagePicker from "expo-image-picker";
import { settings } from "@/config";
import { useAppSelector } from "@/store/hook";
import { uploadMedicalRecordDetailMultipleFiles } from "@/api/MedicalRecordDetail";
import { ModalImage, ModalLoading } from "@/components";
import { UserData } from "@/types/User";
import { Modalize } from "react-native-modalize";
import ModalBottom from "@/components/ModalBottom";

const { padding, orangeColor, blueColor } = settings.styles;
const { width: dW } = Dimensions.get("window");

type IProps = {
  item: DiagnosticData;
};

const PrescriptionItem: FC<IProps> = ({ item }) => {
  // get current user
  const user = useAppSelector((state) => state.user.current) as UserData;

  // new images to add
  const select = useRef<Modalize>(null);
  const slide = useRef<Modalize>(null);
  const [images, setImages] = useState<any[]>([]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
        quality: 1,
      });

      if (!result.cancelled) {
        setImages([
          ...images,
          {
            ...result,
            folderId: 1,
            medicalRecordId: item.MedicalRecordId,
            medicalRecordDetailId: item.Id,
            userId: user.UserId,
            fileType: 2,
            url: result["uri"],
          },
        ]);
      }
    }
  };

  const takeImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchCameraAsync({
        quality: 1,
      });

      if (!result.cancelled) {
        setImages([
          ...images,
          {
            ...result,
            folderId: 1,
            medicalRecordId: item.MedicalRecordId,
            medicalRecordDetailId: item.Id,
            userId: user.UserId,
            fileType: 2,
            url: result["uri"],
          },
        ]);
      }
    }
  };

  const removeImage = (index) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  const [loading, setLoading] = useState(false);
  const _onPress = async () => {
    setLoading(true);
    await uploadMedicalRecordDetailMultipleFiles(item.Id, images);
    setLoading(false);
  };

  return (
    <View style={styles.block}>
      <BaseHospital
        hospital={item.HospitalName}
        address={item.HospitalAddress}
        first={true}
      />
      <Text style={styles.type}>
        {item.SpecialistTypeId && `Khoa: ${item.SpecialistTypeName}, `}Phòng{" "}
        {item.RoomName}
      </Text>
      <View style={{ backgroundColor: 'white', height: 419, width: "100%", paddingTop: 26, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#E8F5F8', height: 419, width: 315, borderRadius: 8 }}>
          <View style={{ paddingLeft: 15, paddingTop: 25 }}>
            <Text style={{ color: "#666666", fontSize: 12 }}>BÁC SĨ</Text>
            <Text style={{ color: "#142977", fontSize: 18 }} >{item.DoctorName}</Text>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 20 }}>
            <Text style={{ color: "#666666", fontSize: 12 }}>KHOA</Text>
            <Text style={{ color: "#142977", fontSize: 18 }} >{item.SpecialistTypeName}</Text>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 20 }}>
            <Text style={{ color: "#666666", fontSize: 12 }}>PHÒNG</Text>
            <Text style={{ color: "#142977", fontSize: 18 }} >{item.RoomName}</Text>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 20 }}>
            <Text style={{ color: "#666666", fontSize: 12 }}>MÃ HỒ SƠ BỆNH VIỆN</Text>
            <Text style={{ color: "#142977", fontSize: 18, paddingRight: 10 }} >{item.Code}</Text>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 20 }}>
            <Text style={{ color: "#666666", fontSize: 12 }}>TOA THUỐC-LỜI DẶN CỦA BÁC SĨ</Text>
            <Text style={{ color: "#142977", fontSize: 18, paddingRight: 10 }} >{item.DoctorComment}</Text>
          </View>



        </View>
      </View>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[...item.UserFiles, ...images]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          let firstOrLast = {};
          if (index === 0) firstOrLast = { marginLeft: padding };
          else if (index === 4) firstOrLast = { marginRight: padding };
          return (
            <TouchableWithoutFeedback onPress={() => slide.current?.open()}>
              <View style={[styles.box, firstOrLast, { height: "auto" }]}>
                <Image source={{ uri: item.uri }} style={styles.img} />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
      <View style={{ width: "100%", height: 200, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
        </View>
      </View>
      <TouchableWithoutFeedback >
        <View style={{
          paddingHorizontal: padding,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,

          paddingTop: 50
        }}>
          <Image
            source={require("../../../../assets/images/camera.png")}
            style={{ height: 17, width: 20, marginRight: 10 }}
          />
          <Text style={styles.documenttext}>ĐÍNH KÈM ẢNH TƯ LIỆU / HỒ SƠ</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flexDirection: 'row', paddingTop: 30, justifyContent: "space-evenly", alignItems: 'center', paddingHorizontal: 80, }}>


        <TouchableWithoutFeedback onPress={() => select.current?.open()}>
          <View style={styles.document}>
            <Image
              source={require("../../../../assets/images/kqxndown.png")}
              style={{ height: 25, width: 13 }}
            />
            <Text style={styles.documenttext}>TẢI XUỐNG</Text>
          </View>

        </TouchableWithoutFeedback>
        <View style={styles.document}>

          <Text style={{ color: "#D9D9D9", fontSize: 20 }}>|</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => select.current?.open()}>
          <View style={styles.document}>
            <Image
              source={require("../../../../assets/images/SHARE.png")}
              style={{ height: 20, width: 20 }}
            />
            <Text style={styles.documenttext}>SHARE</Text>
          </View>

        </TouchableWithoutFeedback>
      </View>
      {/* <TouchableWithoutFeedback onPress={() => select.current?.open()}>
        <View style={styles.document}>
          <Icon type="EvilIcons" name="camera" style={styles.documenticon} />
          <Text style={styles.documenttext}>CHỤP ẢNH / LƯU HỒ SƠ</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', paddingHorizontal: 120, paddingTop: 30 }}>
        <View>
          <Image
            source={require("../../../../assets/images/tri.png")}
            style={{ height: 6, width: 18 }}
          />
        </View>
        <View style={{ backgroundColor: '#142977', height: 44, width: 44, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>01</Text>
        </View>

        <View style={{ backgroundColor: '#fff', height: 44, width: 44, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>02</Text>
        </View>
        <View style={{ backgroundColor: '#fff', height: 44, width: 44, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>03</Text>
        </View>
        <View>
          <Image
            source={require("../../../../assets/images/phai.png")}
            style={{ height: 6, width: 18 }}
          />
        </View>
      </View>
      {images.length > 0 && (
        <TouchableWithoutFeedback onPress={loading ? undefined : _onPress}>
          <View style={styles.update}>
            <Text style={styles.updatetext}>CẬP NHẬT</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      <ModalBottom
        ref={select}
        heading="Thêm hình ảnh"
        headingButton={
          images.length > 0 ? { text: "LƯU", onPress: _onPress } : undefined
        }
      >
        <>
          <FlatList
            style={styles.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...item.UserFiles, ...images]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              let firstOrLast = {};
              if (index === 0) firstOrLast = { marginLeft: 30 };
              else if (index === 4) firstOrLast = { marginRight: 30 };
              return (
                <TouchableWithoutFeedback onPress={() => slide.current?.open()}>
                  <View style={[styles.box, firstOrLast]}>
                    <Image source={{ uri: item.uri }} style={styles.img} />
                    <TouchableWithoutFeedback
                      onPress={() => removeImage(index)}
                    >
                      <Icon
                        type="AntDesign"
                        name="closecircle"
                        style={styles.remove}
                      />
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 10,
              marginBottom: 4,
            }}
          >
            <TouchableWithoutFeedback onPress={loading ? undefined : takeImage}>
              <View style={styles.add}>
                <Text style={styles.addtext}>Chụp ảnh</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={loading ? undefined : pickImage}>
              <View style={styles.add}>
                <Text style={styles.addtext}>Thêm hình ảnh từ thiết bị</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      </ModalBottom>
      <ModalImage ref={slide} images={images} />
      <ModalLoading visible={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingBottom: 10,
  },
  type: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1.5,
    fontFamily: "SFProDisplay-Semibold",
    color: blueColor,
    marginHorizontal: padding,
  },
  list: {
    marginTop: 8,
  },
  box: {
    height: 90,
    justifyContent: "flex-end",
    marginRight: 10,
    marginBottom: 14,
  },
  img: {
    width: 74,
    height: 74,
    borderRadius: 12,
  },
  remove: {
    position: "absolute",
    top: 4,
    right: -10,
    fontSize: 24,
    color: "#434343",
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  document: {
    paddingHorizontal: padding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  documenticon: {
    color: orangeColor,
    marginRight: 4,
  },
  documenttext: {
    textAlign: "center",
    color: orangeColor,
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 1.5,
    fontFamily: "SFProDisplay-Regular",
  },
  update: {
    elevation: 4,
    backgroundColor: blueColor,
    alignSelf: "center",
    marginVertical: 15,
    paddingHorizontal: 57,
    paddingTop: 15,
    paddingBottom: 17,
    borderRadius: 100,
  },
  updatetext: {
    fontSize: 16,
    letterSpacing: 1.25,
    color: "#fff",
    fontFamily: "SFProDisplay-Semibold",
  },
  add: {
    paddingTop: 15,
    paddingBottom: 17,
    backgroundColor: blueColor,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginBottom: 6,
  },
  addtext: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 1.25,
    fontFamily: "SFProDisplay-Semibold",
  },
});

export default PrescriptionItem;
