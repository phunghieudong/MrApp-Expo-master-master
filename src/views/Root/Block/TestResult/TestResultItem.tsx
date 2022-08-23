
//@ts-nocheck
import React, { FC, useRef, useState } from "react";
import { Icon, Spinner } from "native-base";
import BaseHospital from "../Base/BaseHospital";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Text,
  Button
} from "react-native";
import { DiagnosticData } from "@/types/MedicalRecordDetail";
import { settings } from "@/config";
import { Modalize } from "react-native-modalize";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as ImagePicker from "expo-image-picker";
import { uploadMedicalRecordDetailMultipleFiles } from "@/api/MedicalRecordDetail";
import { useAppSelector } from "@/store/hook";
import { UserData } from "@/types/User";
import ModalBottom from "@/components/ModalBottom";
import { ModalImage, ModalLoading } from "@/components";
import { BottomSheet } from 'react-native-btr';
const { padding, blueColor, orangeColor, mainColorLight, mainColor } =
  settings.styles;

type IProps = {
  item: DiagnosticData;
  first: boolean;
};

const Index: FC<IProps> = ({
  item: {
    MedicalRecordId,
    DoctorComment,
    UserFiles,
    HospitalAddress,
    HospitalName,
    HospitalId,
    SpecialistTypeName,
    Id,
    RoomName,
  },
  first,
}) => {
  const user = useAppSelector((state) => state.user.current) as UserData;

  // chọn / chụp hình ảnh từ thiết bị
  const [images, setImages] = useState<any[]>([]);
  const select = useRef<Modalize>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
      });

      if (!result.cancelled) {
        setImages([
          ...images,
          {
            ...result,
            medicalRecordId: MedicalRecordId,
            medicalRecordDetailId: Id,
            folderId: 2,
            userId: user.UserId,
            fileType: 3,
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
            medicalRecordId: MedicalRecordId,
            medicalRecordDetailId: Id,
            folderId: 2,
            userId: user.UserId,
            fileType: 3,
            url: result["uri"],
          },
        ]);
      }
    }
  };

  const removeImage = (index: number) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  const [loading, setLoading] = useState(false);
  const _onPress = async () => {
    try {
      try {
        setLoading(true);
        await uploadMedicalRecordDetailMultipleFiles(Id, images);
        setLoading(false);
      } catch (error) { }
    } catch (error) { }
  };

  // xem slide hình
  const slide = useRef<Modalize>(null);
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {

    setVisible(!visible);
  };
  return (
    <View style={styles.block}>
      <BaseHospital
        first={first}
        hospital={HospitalName}
        address={HospitalAddress}
      />
      <View style={styles.profile}>
        <View style={styles.group}>
          <Text style={styles.label}>KHOA</Text>
          <Text style={styles.value}>{SpecialistTypeName}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>PHÒNG</Text>
          <Text style={styles.value}>{RoomName}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>MÃ HỒ SƠ BỆNH VIỆN</Text>
          <Text style={styles.value}>BV-{HospitalId}</Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.label}>CHUẨN ĐOÁN</Text>
          <Text style={styles.value}>{DoctorComment}</Text>
        </View>
      </View>

      <View style={{  width: "100%", height: 200 }}>
        <View style={{ flexDirection: 'row', justifyContent:'space-evenly' , padding:10 }}>
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102,  }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-evenly' , padding:10 }}>
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102,  }}
          />
          <Image
            source={require("../../../../assets/images/LKSTvuong.png")}
            style={{ height: 102, width: 102, }}
          />
        </View>
      </View>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item: i, index }) => {
          let firstOrLast = {};
          if (index === 0) firstOrLast = { marginLeft: padding };
          else if (index === images.length - 1)
            firstOrLast = { marginRight: padding };
          return (
            <View
              style={[
                firstOrLast,
                { width: 72, height: 72, marginRight: 8, marginTop: 8 , },
              ]}
            >
              <TouchableWithoutFeedback onPress={() => slide.current?.open()}>
                <Image source={{ uri: i.uri }} style={styles.img} />
              </TouchableWithoutFeedback>
            </View>
          );
        }}
      />
      <TouchableWithoutFeedback onPress={toggleBottomNavigationView}>
        <View style={styles.document}>
          <Image
            source={require("../../../../assets/images/camera.png")}
            style={{ height: 17, width: 20, marginRight: 10 }}
          />
          <Text style={styles.documenttext}>ĐÍNH KÈM ẢNH TƯ LIỆU / HỒ SƠ</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', paddingHorizontal: 80 ,}}>


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

      {images.length > 0 && (
        <TouchableWithoutFeedback onPress={loading ? undefined : _onPress}>
          <View style={styles.update}>
            <Text style={styles.updatetext}>CẬP NHẬT</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      
      <View style={styles.container}>


        <BottomSheet
          visible={visible}

          onBackButtonPress={toggleBottomNavigationView}

          onBackdropPress={toggleBottomNavigationView}

        >

          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View
                style={styles.bottomNavigationView}
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
            </View>
          </View>
        </BottomSheet>
      </View>
      <ModalImage ref={slide} images={images} />
      <ModalLoading visible={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingBottom: 10,
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16
  },
  profile: {
    marginHorizontal: padding,
    marginTop: 16,
    backgroundColor: mainColorLight,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  group: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 1.5,
    fontFamily: "SFProDisplay-Regular",
    color: "#142977",
    opacity: 0.5,
  },
  value: {
    color: "#142977",
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "SFProDisplay-Regular",
  },
  list: {},
  box: {
    width: 84,
    height: 95,
    justifyContent: "flex-end",
  },
  img: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  remove: {
    position: "absolute",
    top: 12,
    right: 2,
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
    marginTop: 50,
    marginBottom: 5,

  },
  documenttext: {
    textAlign: "center",
    color: "#E85D04",
    fontSize: 16,
    letterSpacing: 1.5,
    fontFamily: "SFProDisplay-Regular",
  },
  documenticon: {
    color: orangeColor,
    marginRight: 4,
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
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: "#142977",
    paddingHorizontal: 12,
    borderRadius: 100,
    marginBottom: 6,
    width: 300
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

export default Index;
